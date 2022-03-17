// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

abstract contract HostingConfig {
	using SafeMath for uint256;

	bytes2 public gId = 0x0001;
	bytes2 public serviceId = 0x0001;

	function guid(bytes28 uuid) public view returns (bytes32) {
		uint256 i = 0;
		i = i.add(type(uint256).max & (uint256(uint16(gId)) << (30 * 8)));
		i = i.add(type(uint256).max & (uint256(uint16(serviceId)) << (28 * 8)));
		i = i.add(type(uint256).max & uint256((uint224(uuid))));
		return bytes32(i);
	}

}