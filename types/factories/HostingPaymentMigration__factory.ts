/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  HostingPaymentMigration,
  HostingPaymentMigrationInterface,
} from "../HostingPaymentMigration";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes28",
        name: "to",
        type: "bytes28",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "bandwidth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "storageAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buildingTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricePerMonth",
            type: "uint256",
          },
          {
            internalType: "bytes28",
            name: "to",
            type: "bytes28",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct IHostingCombos.Combo",
        name: "combo",
        type: "tuple",
      },
    ],
    name: "AddCombo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "manager",
        type: "address",
      },
    ],
    name: "AddManger",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "manager",
        type: "address",
      },
    ],
    name: "RemoveManger",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes28",
        name: "to",
        type: "bytes28",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "bandwidth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "storageAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buildingTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricePerMonth",
            type: "uint256",
          },
          {
            internalType: "bytes28",
            name: "to",
            type: "bytes28",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct IHostingCombos.Combo",
        name: "combo",
        type: "tuple",
      },
    ],
    name: "UpdateCombo",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "bandwidth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "storageAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buildingTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricePerMonth",
            type: "uint256",
          },
          {
            internalType: "bytes28",
            name: "to",
            type: "bytes28",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
        ],
        internalType: "struct IHostingCombos.Combo",
        name: "combo",
        type: "tuple",
      },
    ],
    name: "addCombo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "manager",
        type: "address",
      },
    ],
    name: "addManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "addToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes28",
        name: "uuid",
        type: "bytes28",
      },
    ],
    name: "boughtTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes28",
        name: "uuid",
        type: "bytes28",
      },
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "canV1Buy",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes28",
        name: "uuid",
        type: "bytes28",
      },
    ],
    name: "canV1Renew",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes28",
        name: "uuid",
        type: "bytes28",
      },
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "canV1Upgrade",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "comboLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "combos",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "bandwidth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "storageAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buildingTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricePerMonth",
            type: "uint256",
          },
          {
            internalType: "bytes28",
            name: "to",
            type: "bytes28",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
        ],
        internalType: "struct IHostingCombos.Combo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes28",
        name: "uuid",
        type: "bytes28",
      },
    ],
    name: "cost",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimalMethod",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "decimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes28",
        name: "uuid",
        type: "bytes28",
      },
    ],
    name: "expiration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes28",
        name: "uuid",
        type: "bytes28",
      },
    ],
    name: "expirationAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiration_",
        type: "uint256",
      },
    ],
    name: "getComboCost",
    outputs: [
      {
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes28",
        name: "uuid",
        type: "bytes28",
      },
    ],
    name: "hasMigrated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "isCustom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes28",
        name: "uuid",
        type: "bytes28",
      },
    ],
    name: "isExpired",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isManagers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes28",
        name: "",
        type: "bytes28",
      },
    ],
    name: "isMigrated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes28",
        name: "uuid",
        type: "bytes28",
      },
    ],
    name: "level",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes28",
        name: "uuid",
        type: "bytes28",
      },
    ],
    name: "migrateV1Receipts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paymentV1",
    outputs: [
      {
        internalType: "contract IHostingPaymentV1",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rcall",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes28",
        name: "uuid",
        type: "bytes28",
      },
    ],
    name: "receiptV1",
    outputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "boughtTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes28",
        name: "uuid",
        type: "bytes28",
      },
    ],
    name: "receipts",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "level",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "boughtTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cost",
            type: "uint256",
          },
        ],
        internalType: "struct HostingReceiptsV2.Receipt",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "manager",
        type: "address",
      },
    ],
    name: "removeManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "removeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes28",
        name: "uuid",
        type: "bytes28",
      },
    ],
    name: "to",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes28",
        name: "uuid",
        type: "bytes28",
      },
    ],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokens",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "bandwidth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "storageAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "buildingTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricePerMonth",
            type: "uint256",
          },
          {
            internalType: "bytes28",
            name: "to",
            type: "bytes28",
          },
          {
            internalType: "bool",
            name: "isValid",
            type: "bool",
          },
        ],
        internalType: "struct IHostingCombos.Combo",
        name: "combo",
        type: "tuple",
      },
    ],
    name: "updateCombo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "validateCombo",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

export class HostingPaymentMigration__factory {
  static readonly abi = _abi;
  static createInterface(): HostingPaymentMigrationInterface {
    return new utils.Interface(_abi) as HostingPaymentMigrationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HostingPaymentMigration {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as HostingPaymentMigration;
  }
}
