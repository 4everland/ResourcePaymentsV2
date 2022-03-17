// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import './HostingManager.sol';
import '../interfaces/IHostingCombos.sol';

abstract contract HostingCombos is IHostingCombos, HostingManager {
	using SafeMath for uint256;

	IHostingCombos.Combo[] internal allCombos;

	function getComboCost(uint256 level, uint256 expiration_) public view override returns (uint256 cost) {
		validateCombo(level);
		cost = allCombos[level].pricePerMonth.mul(expiration_).div(30 days);
	}

	function comboLength() public view override returns (uint256) {
		return allCombos.length;
	}

	function addCombo(Combo memory combo) external override onlyManager {
		_addCombo(combo);
	}

	function _addCombo(Combo memory combo) internal {
		allCombos.push(combo);
		emit AddCombo(combo.to, comboLength()-1, combo);
	}

	function updateCombo(uint256 level, Combo memory combo) external override onlyManager {
		require(level < allCombos.length, 'HostingPayment: Invalid level.');
		allCombos[level] = combo;
		emit UpdateCombo(combo.to, level, combo);
	}

	function combos(uint256 level) public view override returns (Combo memory) {
		validateCombo(level);
		return allCombos[level];
	}

	function isCustom(uint256 level) public view override returns(bool) {
		return allCombos[level].to != bytes28(0);
	}

	function validateCombo(uint256 level) public view {
		require(level < allCombos.length, 'HostingPayment: Invalid combo level.');
		require(allCombos[level].isValid, 'HostingPayment: Invalid como.');
	}

}
