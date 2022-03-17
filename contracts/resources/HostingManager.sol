// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';

import '../interfaces/IHostingCombos.sol';

abstract contract HostingManager is Ownable {

	mapping(address => bool) public isManagers;

	event AddManager(address indexed manager);
	event RemoveManager(address indexed manager);

	function addManager(address manager) external onlyOwner {
		require(!isManagers[manager], 'HostingManager: manager exists.');
		isManagers[manager] = true;
		emit AddManager(manager);
	}

	function removeManager(address manager) external onlyOwner {
		require(isManagers[manager], 'HostingManager: nonexistent manager.');
		delete isManagers[manager];
		emit RemoveManager(manager);
	}

	modifier onlyManager() {
		require(isManagers[msg.sender], 'HostingManager: nonexistent manager.');
		_;
	}

}
