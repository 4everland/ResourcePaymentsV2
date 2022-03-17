// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import './IHostingCombos.sol';
import './IHostingTokens.sol';

interface IHostingPaymentV2 is IHostingCombos, IHostingTokens {

	function buy(
		bytes28 uuid,
		uint256 tokenIndex,
		uint256 level,
		uint256 expiration_
	) external returns (uint256 cost);

	function renew(
		uint256 nonce,
		bytes28 uuid,
		uint256 tokenIndex,
		uint256 expiration_
	) external returns (uint256 cost);

	function upgrade(
		bytes28 uuid,
		uint256 tokenIndex,
		uint256 level,
		uint256 moreExpiration
	) external returns (uint256 cost);

}