// SPDX-License-Identifier: UNLICENSE

pragma solidity >=0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';
import '../interfaces/IRootChannel.sol';

abstract contract ChannelWrapper is Ownable {
	IRootChannel public channel;

	constructor(IRootChannel channel_) {
		channel = channel_;
	}

	function transferChannel(IRootChannel channel_) external onlyOwner {
		channel = channel_;
	}

	function sendMessage(bytes memory message) internal {
		channel.sendMessageToChild(message);
	}

}