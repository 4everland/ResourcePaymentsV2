// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

interface IHostingTokens {

	function tokenLength() external view returns (uint256);

	function tokens(uint256 index) external view returns (IERC20);

}