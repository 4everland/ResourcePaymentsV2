// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol';

contract Swaps  {
	using SafeMath for uint256;
	using SafeERC20 for IERC20;

	address public WETH;

	IUniswapV2Router02 public routerV2 = IUniswapV2Router02(0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D);

	constructor(address WETH_) {
		WETH = WETH_;
	}

	function buyExactTokenValuatedResourceByOtherToken(
		address dest,
		address[] memory path,
		uint256 amountOut,
		uint256 valueInMax,
		uint256 deadline,
		bytes memory data
	) external returns (uint256[] memory values) {
		require(path.length > 1, 'Swaps: Invalid path.');
		IERC20 tokenIn = IERC20(path[0]);
		tokenIn.safeTransferFrom(msg.sender, address(this), valueInMax);
		tokenIn.safeApprove(address(routerV2), valueInMax);
		values = routerV2.swapTokensForExactTokens(amountOut, valueInMax, path, address(this), deadline);
		uint256 value = values[0];
		if (value < valueInMax) {
			tokenIn.safeTransfer(msg.sender, valueInMax.sub(value));
		}
		tokenIn.safeApprove(address(routerV2), 0);
		IERC20 tokenOut = IERC20(path[path.length - 1]);
		tokenOut.safeApprove(dest, amountOut);
		callDestination(dest, data);
	}

	function buyExactTokenValuatedResourceByETH(
		address dest,
		address[] memory path,
		uint256 amountOut,
		uint256 deadline,
		bytes memory data
	) external payable returns (uint256[] memory values) {
		require(path.length > 1, 'Swaps: Invalid path.');
		require(path[0] == WETH, 'Swaps: Not ETH swap path..');
		values = routerV2.swapETHForExactTokens{ value: msg.value }(amountOut, path, address(this), deadline);
		uint256 value = values[0];
		if (msg.value > value) {
			payable(msg.sender).transfer(msg.value.sub(value));
		}
		IERC20 tokenOut = IERC20(path[path.length - 1]);
		tokenOut.safeApprove(dest, amountOut);
		callDestination(dest, data);
	}

	function callDestination(address dest, bytes memory data) internal {
		(bool success, bytes memory result) = dest.call(data);
		if (!success) {
			revert(abi.decode(result,(string)));
		}
	}

	function getAmountsIn(uint256 amountOut, address[] memory path) public view returns(uint256[] memory) {
		return routerV2.getAmountsIn(amountOut, path);
	}

}
