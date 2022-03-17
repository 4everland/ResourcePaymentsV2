/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStateSender, IStateSenderInterface } from "../IStateSender";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "sendMessageToChild",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IStateSender__factory {
  static readonly abi = _abi;
  static createInterface(): IStateSenderInterface {
    return new utils.Interface(_abi) as IStateSenderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IStateSender {
    return new Contract(address, _abi, signerOrProvider) as IStateSender;
  }
}
