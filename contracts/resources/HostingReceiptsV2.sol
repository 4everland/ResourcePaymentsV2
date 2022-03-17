// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

abstract contract HostingReceiptsV2 {
	using SafeMath for uint256;

	struct Receipt {
		address to;
		IERC20 token;
		uint256 level;
		uint256 boughtTime;
		uint256 expiration;
		uint256 cost;
	}

	mapping(bytes28 => Receipt) internal allReceipts;

	function receipts(bytes28 uuid) public view returns (Receipt memory) {
		return allReceipts[uuid];
	}

	function isExpired(bytes28 uuid) public view returns (bool) {
		return block.timestamp >= expirationAt(uuid);
	}

	function expirationAt(bytes28 uuid) public view returns (uint256) {
		return receipts(uuid).boughtTime.add(receipts(uuid).expiration);
	}

	function level(bytes28 uuid) public view returns (uint256) {
		return receipts(uuid).level;
	}

	function boughtTime(bytes28 uuid) public view returns (uint256) {
		return receipts(uuid).boughtTime;
	}

	function cost(bytes28 uuid) public view returns (uint256) {
		return receipts(uuid).cost;
	}

	function token(bytes28 uuid) public view returns (IERC20) {
		return receipts(uuid).token;
	}

	function to(bytes28 uuid) public view returns (address) {
		return receipts(uuid).to;
	}

	function expiration(bytes28 uuid) public view returns(uint256) {
		if (isExpired(uuid)) {
			return 0;
		}
		return expirationAt(uuid).sub(block.timestamp);
	}

	function updateReceipt(
		bytes28 uuid,
		IERC20 token_,
		uint256 level_,
		uint256 expiration_,
		uint256 cost_
	) internal {
		Receipt memory receipt = receipts(uuid);
		if (receipt.to != msg.sender) {
			allReceipts[uuid].to = msg.sender;
		}
		if (receipt.token != token_) {
			allReceipts[uuid].token = token_;
		}
		if (receipt.level != level_) {
			allReceipts[uuid].level = level_;
		}
		if (receipt.boughtTime != block.timestamp) {
			allReceipts[uuid].boughtTime = block.timestamp;
		}
		if (receipt.expiration != expiration_) {
			allReceipts[uuid].expiration = expiration_;
		}
		if (receipt.cost != cost_) {
			allReceipts[uuid].cost = cost_;
		}
	}

}
