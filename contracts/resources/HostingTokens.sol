// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import './HostingManager.sol';
import '../interfaces/IHostingTokens.sol';

abstract contract HostingTokens is IHostingTokens, HostingManager {

	using SafeERC20 for IERC20;

	//bytes4(keccak256('decimals()'))
	bytes4 public decimalMethod = 0x313ce567; 

	IERC20[] internal allTokens;

	event AddToken(uint256 indexed index, IERC20 indexed token);

	event RemoveToken(uint256 indexed index, IERC20 indexed token);

	function tokenLength() public view override returns (uint256) {
		return allTokens.length;
	}

	function addToken(IERC20 token) external onlyManager {
		_addToken(token);
	}

	function _addToken(IERC20 token) internal {
		allTokens.push(token);
		emit AddToken(allTokens.length, token);
	}

	function removeToken(uint256 index) external onlyManager {
		emit RemoveToken(index, allTokens[index]);
		delete allTokens[index];
	}

	function decimals(uint256 index) public view validateToken(index) returns(uint256) {
		(bool success, bytes memory data) = address(allTokens[index]).staticcall(abi.encodeWithSelector(decimalMethod));
		if (!success) revert(abi.decode(data, (string)));
		return abi.decode(data, (uint256));
	}

	function tokens(uint256 index) public view override validateToken(index) returns(IERC20) {
		return allTokens[index];
	}

	modifier validateToken(uint256 index) {
		require(index < allTokens.length, 'HostingPayment: index out of range.');
		_;
	}

}
