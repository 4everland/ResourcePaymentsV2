// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;
import '@openzeppelin/contracts/access/Ownable.sol';

abstract contract Lockable is Ownable {
	bool private locked = false;

	function lock() public onlyOwner {
		locked = true;
	}

	function unlock() public onlyOwner {
		locked = false;
	}

	modifier onlyUnlock() {
		require(!locked, 'Lockable: operation is locked.');
		_;
	}
}
