// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

interface IHostingCombos {
	
	struct Combo {
		uint256 bandwidth;
		uint256 storageAmount;
		uint256 buildingTime;
		uint256 pricePerMonth;
		bytes28 to;
		bool isValid;
	}

	event AddCombo(bytes28 indexed to, uint256 indexed level, Combo combo);

	event UpdateCombo(bytes28 indexed to, uint256 indexed level, Combo combo);

	function getComboCost(uint256 level, uint256 expiration_) external view returns (uint256 cost);

	function updateCombo(uint256 level, Combo memory combo) external;

	function addCombo(Combo memory combo) external;

	function isCustom(uint256 level) external view returns(bool);

	function comboLength() external view returns (uint256);

	function combos(uint256 level) external view returns (Combo memory);

}