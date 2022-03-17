// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import './HostingCombos.sol';
import './HostingTokens.sol';
import './HostingReceiptsV2.sol';
import './HostingConfig.sol';

import '../interfaces/IHostingPaymentV2.sol';
import '../channel/ChannelWrapper.sol';
import '../access/Lockable.sol';

/// @title Payment for a combo.
/// @dev Buy, Renew and Upgrade a combo are supported for using a standard token(USDT, USDC, DAI). 
contract HostingPaymentV2 is IHostingPaymentV2, HostingConfig, HostingCombos, HostingTokens, HostingReceiptsV2, Lockable, ChannelWrapper {

	using SafeMath for uint256;
	using SafeERC20 for IERC20;

	/// @dev Emit buy event.
	event Buy(bytes2 indexed gId_, bytes2 indexed serviceId_, bytes28 indexed uuid, Receipt receipt);

	/// @dev Emit Renew event.
	event Renew(bytes2 indexed gId_, bytes2 indexed serviceId_, bytes28 indexed uuid, Receipt receipt);

	/// @dev Emit Upgrade event.
	event Upgrade(bytes2 indexed gId_, bytes2 indexed serviceId_, bytes28 indexed uuid, Receipt receipt);

	/// @dev Nonces for renew a combo. avoid a same renew function occurs in one block.
	mapping(bytes28 => uint256) public nonces;

	/// @dev used for Polygon channel message, sync the storage to Polygon network.
	bytes4 public mints = bytes4(keccak256('mintStorage(bytes2,bytes2,bytes28,uint256,uint256)'));

	/// @dev default decimal for combo price.
	uint256 public Decimal = 18;

	/// @dev Minimal expiration for getting a combo.
	uint256 public MinExpiration = 30 days;

	/// @dev Maximum total expiration for getting a combo.
	uint256 public MaxTotalExpiration = 365 days;

	constructor(
		address owner,
		IRootChannel channel,
		IERC20[] memory tokens
	) ChannelWrapper(channel) {
		transferOwnership(owner);
		uint256 gbBits = 30;
		_addCombo(Combo(300 << gbBits, 40 << gbBits, 500 minutes, 40 * (10 ** Decimal), bytes28(0), true));
		_addCombo(Combo(1000 << gbBits, 100 << gbBits, 2000 minutes, 199 * (10 ** Decimal), bytes28(0), true));
		for (uint256 i = 0; i < tokens.length; i++) {
			_addToken(tokens[i]);
		}
	}

	/// @dev Buy a `combo` for `uuid`
	/// @param uuid uuid of the user.
	/// @param tokenIndex token index of tokens.
	/// @param level index of the `combos`
	/// @param expiration_ exipration for the combo
	/// @return cost how much token used.
	function buy(
		bytes28 uuid,
		uint256 tokenIndex,
		uint256 level,
		uint256 expiration_
	) external override validateToken(tokenIndex) validateExpiration(expiration_) validateCustomCombo(level, uuid) onlyUnlock returns (uint256 cost) {
		require(canBuy(uuid, level), 'HostingPaymentV2: can not buy combo.');
		validateCombo(level);
		cost = getComboCost(level, expiration_);
		cost = costToOriginalDecimal(cost, tokenIndex);
		tokens(tokenIndex).safeTransferFrom(msg.sender, address(this), cost);
		updateReceipt(uuid, tokens(tokenIndex), level, expiration_, cost);
		sendReceiptToChild(uuid);
	
		emit Buy(gId, serviceId, uuid, receipts(uuid));
	}

	/// @dev Renew a `combo` which owned of the user.
	/// @param nonce nonce of the renew count.
	/// @param uuid uuid of the user.
	/// @param tokenIndex token index of tokens.
	/// @param expiration_ exipration for the combo
	/// @return cost how much token used.
	function renew(
		uint256 nonce,
		bytes28 uuid,
		uint256 tokenIndex,
		uint256 expiration_
	) external override validateNonce(uuid, nonce) validateToken(tokenIndex) validateExpiration(expiration_) onlyUnlock returns (uint256 cost) {
		require(canRenew(uuid), 'HostingPaymentV2: canot renew combo.');
		uint256 level = receipts(uuid).level;
		if (isCustom(level)) {
			require(uuid == combos(level).to, 'HostingPaymentV2: specific user required.');
		}
		validateCombo(level);
		cost = getComboCost(level, expiration_);
		cost = costToOriginalDecimal(cost, tokenIndex);
		tokens(tokenIndex).safeTransferFrom(msg.sender, address(this), cost);
		updateReceipt(uuid, tokens(tokenIndex), level, expiration_.add(expiration(uuid)), cost);
		sendReceiptToChild(uuid);

		emit Renew(gId, serviceId, uuid, receipts(uuid));
	}

	/// @dev Upgrade a `combo` for `uuid`
	/// @param uuid uuid of the user.
	/// @param tokenIndex token index of tokens.
	/// @param level index of the `combos`
	/// @param moreExpiration more exipration for the combo exclude exchanged expiration from current level
	/// @return cost how much token used.
	function upgrade(
		bytes28 uuid,
		uint256 tokenIndex,
		uint256 level,
		uint256 moreExpiration
	) external override validateToken(tokenIndex) validateCustomCombo(level, uuid) onlyUnlock returns (uint256 cost) {
		require(canUpgrade(uuid, level), 'HostingPaymentV2: can not upgrade.');
		validateCombo(level);
		uint256 expiration_ = getUpgradeExchange(uuid, level);
		if (moreExpiration > 0) {
			cost = getComboCost(level, moreExpiration);
			cost = costToOriginalDecimal(cost, tokenIndex);
			expiration_ = expiration_.add(moreExpiration);
			tokens(tokenIndex).safeTransferFrom(msg.sender, address(this), cost);
		}
		if (expiration_ < MinExpiration) {
			revert('HostingPaymentV2: expiration too small.');
		}
		updateReceipt(uuid, tokens(tokenIndex), level, expiration_, cost);
		sendReceiptToChild(uuid);

		emit Upgrade(gId, serviceId, uuid, receipts(uuid));
	}

	function sendReceiptToChild(bytes28 uuid) internal {
		sendMessage(abi.encodeWithSelector(mints, gId, serviceId, uuid, combos(receipts(uuid).level).storageAmount, expirationAt(uuid)));
	}

	/// @dev Exchange cost to the original decimal.
	/// @param cost cost of the default decimal.
	/// @param tokenIndex token index of tokens.
	/// @return cost the cost of the original token decimal.
	function costToOriginalDecimal(uint256 cost, uint256 tokenIndex) public view returns(uint256) {
		uint256 tokenDecimal = decimals(tokenIndex);
		if (Decimal == tokenDecimal) {
			return cost;
		} else if (tokenDecimal > Decimal) {
			return cost.mul(10 ** (tokenDecimal.sub(Decimal)));
		} else {
			return cost.div(10 ** (Decimal.sub(tokenDecimal)));
		}
	}

	/// @dev withdraw tokens.
	/// @param token address of the ERC20 token.
	/// @param to receiver.
	/// @param value withdrawal.
	function withdraw(IERC20 token, address to, uint256 value) external onlyOwner {
		token.safeTransfer(to, value);
	}

	/// @dev set the minimal expiration.
	function setMinExpriation(uint256 expiration_) external onlyManager {
		MinExpiration = expiration_;
	}

	/// @dev set the max total expiration.
	function setMaxTotalExpriation(uint256 expiration_) external onlyManager {
		MaxTotalExpiration = expiration_;
	}

	/// @dev calculate the exchange expiration for upgrading a combo with a new level.
	function getUpgradeExchange(bytes28 uuid, uint256 level) public view returns (uint256) {
		uint256 currentLevel = receipts(uuid).level;
		uint256 currentPrice = combos(currentLevel).pricePerMonth;
		uint256 upgradingPrice = combos(level).pricePerMonth;
		require(currentPrice < upgradingPrice, 'HostingPaymentV2: upgrading price too low.');
		return expiration(uuid).mul(currentPrice).div(upgradingPrice);
	}

	function canBuy(bytes28 uuid, uint256 level) public view returns (bool) {
		if (!_isValidUserForCombo(level, uuid)) {
			return false;
		}
		if (!combos(level).isValid) {
			return false;
		}
		return receipts(uuid).boughtTime == 0 || isExpired(uuid);
	}

	function canRenew(bytes28 uuid) public view returns (bool) {
		uint256 currentLevel = receipts(uuid).level;
		if (!_isValidUserForCombo(currentLevel, uuid)) {
			return false;
		}
		if (!combos(currentLevel).isValid) {
			return false;
		}
		return receipts(uuid).boughtTime > 0;
	}

	function canUpgrade(bytes28 uuid, uint256 level) public view returns (bool) {
		if (!_isValidUserForCombo(level, uuid)) {
			return false;
		}
		uint256 currentLevel = receipts(uuid).level;
		if (!combos(currentLevel).isValid) {
			return false;
		}
		if (!combos(level).isValid) {
			return false;
		}
		if (isExpired(uuid)) {
			return false;
		}
		return combos(level).pricePerMonth > combos(currentLevel).pricePerMonth;
	}

	function maxTotalRenewExpiration(bytes28 uuid) public view returns (uint256) {
		if (!canRenew(uuid)) {
			return 0;
		}
		if (isExpired(uuid)) {
			return MaxTotalExpiration;
		}
		return MaxTotalExpiration.sub(expiration(uuid));
	}
	
	function maxTotalUpgradeExpiration(bytes28 uuid, uint256 level) public view returns (uint256) {
		if (!canUpgrade(uuid, level)) {
			return 0;
		}
		uint256 exp = getUpgradeExchange(uuid, level);
		return MaxTotalExpiration.sub(exp);
	}

	/// @dev refactor receive fuctions.
	receive() external payable {
		revert('HostingPaymentV2: can not receive eth.');
	}

	function _isValidUserForCombo(uint256 level, bytes28 uuid) internal view returns (bool){
		if (isCustom(level)) {
			if (uuid != combos(level).to) {
				return false;
			}
		}
		return true;
	}

	modifier validateCustomCombo(uint256 level, bytes28 uuid) {
		if (isCustom(level)) {
			require(uuid == combos(level).to, 'HostingPaymentV2: specific user required.');
		}
		_;
	}

	modifier validateNonce(bytes28 uuid, uint256 nonce) {
		require(nonce == nonces[uuid], 'HostingPaymentV2: Invalid nonce.');
		nonces[uuid]++;
		_;
	}

	modifier validateExpiration(uint256 expiration_) {
		require(expiration_ >= MinExpiration, 'HostingPaymentV2: expiration too small.');
		_;
	}

	modifier validateTotalExpiration(bytes28 uuid) {
		require(receipts(uuid).expiration <= MaxTotalExpiration, 'HostingPaymentV2: total expiration too large.');
		_;
	}
}