/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IHostingPaymentV1Interface extends ethers.utils.Interface {
  functions: {
    "addCombo((uint256,uint256,uint256,uint256,bytes28,bool))": FunctionFragment;
    "buy(bytes28,uint256,uint256,uint256)": FunctionFragment;
    "canBuy(bytes28,uint256)": FunctionFragment;
    "canRenew(bytes28)": FunctionFragment;
    "canUpgrade(bytes28,uint256)": FunctionFragment;
    "comboLength()": FunctionFragment;
    "combos(uint256)": FunctionFragment;
    "getComboCost(uint256,uint256)": FunctionFragment;
    "isCustom(uint256)": FunctionFragment;
    "receipts(bytes28)": FunctionFragment;
    "renew(uint256,bytes28,uint256,uint256)": FunctionFragment;
    "tokenLength()": FunctionFragment;
    "tokens(uint256)": FunctionFragment;
    "updateCombo(uint256,(uint256,uint256,uint256,uint256,bytes28,bool))": FunctionFragment;
    "upgrade(bytes28,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addCombo",
    values: [
      {
        bandwidth: BigNumberish;
        storageAmount: BigNumberish;
        buildingTime: BigNumberish;
        pricePerMonth: BigNumberish;
        to: BytesLike;
        isValid: boolean;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "buy",
    values: [BytesLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "canBuy",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "canRenew", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "canUpgrade",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "comboLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "combos",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getComboCost",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isCustom",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "receipts", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "renew",
    values: [BigNumberish, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCombo",
    values: [
      BigNumberish,
      {
        bandwidth: BigNumberish;
        storageAmount: BigNumberish;
        buildingTime: BigNumberish;
        pricePerMonth: BigNumberish;
        to: BytesLike;
        isValid: boolean;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "upgrade",
    values: [BytesLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addCombo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "canBuy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "canRenew", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "canUpgrade", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "comboLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "combos", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getComboCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isCustom", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "receipts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "renew", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateCombo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;

  events: {
    "AddCombo(bytes28,uint256,tuple)": EventFragment;
    "UpdateCombo(bytes28,uint256,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddCombo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateCombo"): EventFragment;
}

export type AddComboEvent = TypedEvent<
  [
    string,
    BigNumber,
    [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
      bandwidth: BigNumber;
      storageAmount: BigNumber;
      buildingTime: BigNumber;
      pricePerMonth: BigNumber;
      to: string;
      isValid: boolean;
    }
  ] & {
    to: string;
    level: BigNumber;
    combo: [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
      bandwidth: BigNumber;
      storageAmount: BigNumber;
      buildingTime: BigNumber;
      pricePerMonth: BigNumber;
      to: string;
      isValid: boolean;
    };
  }
>;

export type UpdateComboEvent = TypedEvent<
  [
    string,
    BigNumber,
    [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
      bandwidth: BigNumber;
      storageAmount: BigNumber;
      buildingTime: BigNumber;
      pricePerMonth: BigNumber;
      to: string;
      isValid: boolean;
    }
  ] & {
    to: string;
    level: BigNumber;
    combo: [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
      bandwidth: BigNumber;
      storageAmount: BigNumber;
      buildingTime: BigNumber;
      pricePerMonth: BigNumber;
      to: string;
      isValid: boolean;
    };
  }
>;

export class IHostingPaymentV1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IHostingPaymentV1Interface;

  functions: {
    addCombo(
      combo: {
        bandwidth: BigNumberish;
        storageAmount: BigNumberish;
        buildingTime: BigNumberish;
        pricePerMonth: BigNumberish;
        to: BytesLike;
        isValid: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buy(
      uuid: BytesLike,
      tokenIndex: BigNumberish,
      level: BigNumberish,
      expiration_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    canBuy(
      uuid: BytesLike,
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    canRenew(uuid: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    canUpgrade(
      uuid: BytesLike,
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    comboLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    combos(
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
          bandwidth: BigNumber;
          storageAmount: BigNumber;
          buildingTime: BigNumber;
          pricePerMonth: BigNumber;
          to: string;
          isValid: boolean;
        }
      ]
    >;

    getComboCost(
      level: BigNumberish,
      expiration_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { cost: BigNumber }>;

    isCustom(
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    receipts(
      uuid: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
            bandwidth: BigNumber;
            storageAmount: BigNumber;
            buildingTime: BigNumber;
            pricePerMonth: BigNumber;
            to: string;
            isValid: boolean;
          }
        ] & {
          to: string;
          token: string;
          level: BigNumber;
          boughtTime: BigNumber;
          expiration: BigNumber;
          totalValue: BigNumber;
          realCost: BigNumber;
          combo: [
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            string,
            boolean
          ] & {
            bandwidth: BigNumber;
            storageAmount: BigNumber;
            buildingTime: BigNumber;
            pricePerMonth: BigNumber;
            to: string;
            isValid: boolean;
          };
        }
      ]
    >;

    renew(
      nonce: BigNumberish,
      uuid: BytesLike,
      tokenIndex: BigNumberish,
      expiration_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokens(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    updateCombo(
      level: BigNumberish,
      combo: {
        bandwidth: BigNumberish;
        storageAmount: BigNumberish;
        buildingTime: BigNumberish;
        pricePerMonth: BigNumberish;
        to: BytesLike;
        isValid: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgrade(
      uuid: BytesLike,
      tokenIndex: BigNumberish,
      level: BigNumberish,
      moreExpiration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addCombo(
    combo: {
      bandwidth: BigNumberish;
      storageAmount: BigNumberish;
      buildingTime: BigNumberish;
      pricePerMonth: BigNumberish;
      to: BytesLike;
      isValid: boolean;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buy(
    uuid: BytesLike,
    tokenIndex: BigNumberish,
    level: BigNumberish,
    expiration_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  canBuy(
    uuid: BytesLike,
    level: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  canRenew(uuid: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  canUpgrade(
    uuid: BytesLike,
    level: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  comboLength(overrides?: CallOverrides): Promise<BigNumber>;

  combos(
    level: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
      bandwidth: BigNumber;
      storageAmount: BigNumber;
      buildingTime: BigNumber;
      pricePerMonth: BigNumber;
      to: string;
      isValid: boolean;
    }
  >;

  getComboCost(
    level: BigNumberish,
    expiration_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isCustom(level: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  receipts(
    uuid: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
        bandwidth: BigNumber;
        storageAmount: BigNumber;
        buildingTime: BigNumber;
        pricePerMonth: BigNumber;
        to: string;
        isValid: boolean;
      }
    ] & {
      to: string;
      token: string;
      level: BigNumber;
      boughtTime: BigNumber;
      expiration: BigNumber;
      totalValue: BigNumber;
      realCost: BigNumber;
      combo: [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
        bandwidth: BigNumber;
        storageAmount: BigNumber;
        buildingTime: BigNumber;
        pricePerMonth: BigNumber;
        to: string;
        isValid: boolean;
      };
    }
  >;

  renew(
    nonce: BigNumberish,
    uuid: BytesLike,
    tokenIndex: BigNumberish,
    expiration_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenLength(overrides?: CallOverrides): Promise<BigNumber>;

  tokens(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  updateCombo(
    level: BigNumberish,
    combo: {
      bandwidth: BigNumberish;
      storageAmount: BigNumberish;
      buildingTime: BigNumberish;
      pricePerMonth: BigNumberish;
      to: BytesLike;
      isValid: boolean;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgrade(
    uuid: BytesLike,
    tokenIndex: BigNumberish,
    level: BigNumberish,
    moreExpiration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addCombo(
      combo: {
        bandwidth: BigNumberish;
        storageAmount: BigNumberish;
        buildingTime: BigNumberish;
        pricePerMonth: BigNumberish;
        to: BytesLike;
        isValid: boolean;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    buy(
      uuid: BytesLike,
      tokenIndex: BigNumberish,
      level: BigNumberish,
      expiration_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canBuy(
      uuid: BytesLike,
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    canRenew(uuid: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    canUpgrade(
      uuid: BytesLike,
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    comboLength(overrides?: CallOverrides): Promise<BigNumber>;

    combos(
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
        bandwidth: BigNumber;
        storageAmount: BigNumber;
        buildingTime: BigNumber;
        pricePerMonth: BigNumber;
        to: string;
        isValid: boolean;
      }
    >;

    getComboCost(
      level: BigNumberish,
      expiration_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isCustom(level: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    receipts(
      uuid: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
          bandwidth: BigNumber;
          storageAmount: BigNumber;
          buildingTime: BigNumber;
          pricePerMonth: BigNumber;
          to: string;
          isValid: boolean;
        }
      ] & {
        to: string;
        token: string;
        level: BigNumber;
        boughtTime: BigNumber;
        expiration: BigNumber;
        totalValue: BigNumber;
        realCost: BigNumber;
        combo: [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
          bandwidth: BigNumber;
          storageAmount: BigNumber;
          buildingTime: BigNumber;
          pricePerMonth: BigNumber;
          to: string;
          isValid: boolean;
        };
      }
    >;

    renew(
      nonce: BigNumberish,
      uuid: BytesLike,
      tokenIndex: BigNumberish,
      expiration_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenLength(overrides?: CallOverrides): Promise<BigNumber>;

    tokens(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    updateCombo(
      level: BigNumberish,
      combo: {
        bandwidth: BigNumberish;
        storageAmount: BigNumberish;
        buildingTime: BigNumberish;
        pricePerMonth: BigNumberish;
        to: BytesLike;
        isValid: boolean;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    upgrade(
      uuid: BytesLike,
      tokenIndex: BigNumberish,
      level: BigNumberish,
      moreExpiration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "AddCombo(bytes28,uint256,tuple)"(
      to?: BytesLike | null,
      level?: BigNumberish | null,
      combo?: null
    ): TypedEventFilter<
      [
        string,
        BigNumber,
        [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
          bandwidth: BigNumber;
          storageAmount: BigNumber;
          buildingTime: BigNumber;
          pricePerMonth: BigNumber;
          to: string;
          isValid: boolean;
        }
      ],
      {
        to: string;
        level: BigNumber;
        combo: [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
          bandwidth: BigNumber;
          storageAmount: BigNumber;
          buildingTime: BigNumber;
          pricePerMonth: BigNumber;
          to: string;
          isValid: boolean;
        };
      }
    >;

    AddCombo(
      to?: BytesLike | null,
      level?: BigNumberish | null,
      combo?: null
    ): TypedEventFilter<
      [
        string,
        BigNumber,
        [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
          bandwidth: BigNumber;
          storageAmount: BigNumber;
          buildingTime: BigNumber;
          pricePerMonth: BigNumber;
          to: string;
          isValid: boolean;
        }
      ],
      {
        to: string;
        level: BigNumber;
        combo: [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
          bandwidth: BigNumber;
          storageAmount: BigNumber;
          buildingTime: BigNumber;
          pricePerMonth: BigNumber;
          to: string;
          isValid: boolean;
        };
      }
    >;

    "UpdateCombo(bytes28,uint256,tuple)"(
      to?: BytesLike | null,
      level?: BigNumberish | null,
      combo?: null
    ): TypedEventFilter<
      [
        string,
        BigNumber,
        [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
          bandwidth: BigNumber;
          storageAmount: BigNumber;
          buildingTime: BigNumber;
          pricePerMonth: BigNumber;
          to: string;
          isValid: boolean;
        }
      ],
      {
        to: string;
        level: BigNumber;
        combo: [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
          bandwidth: BigNumber;
          storageAmount: BigNumber;
          buildingTime: BigNumber;
          pricePerMonth: BigNumber;
          to: string;
          isValid: boolean;
        };
      }
    >;

    UpdateCombo(
      to?: BytesLike | null,
      level?: BigNumberish | null,
      combo?: null
    ): TypedEventFilter<
      [
        string,
        BigNumber,
        [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
          bandwidth: BigNumber;
          storageAmount: BigNumber;
          buildingTime: BigNumber;
          pricePerMonth: BigNumber;
          to: string;
          isValid: boolean;
        }
      ],
      {
        to: string;
        level: BigNumber;
        combo: [BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
          bandwidth: BigNumber;
          storageAmount: BigNumber;
          buildingTime: BigNumber;
          pricePerMonth: BigNumber;
          to: string;
          isValid: boolean;
        };
      }
    >;
  };

  estimateGas: {
    addCombo(
      combo: {
        bandwidth: BigNumberish;
        storageAmount: BigNumberish;
        buildingTime: BigNumberish;
        pricePerMonth: BigNumberish;
        to: BytesLike;
        isValid: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buy(
      uuid: BytesLike,
      tokenIndex: BigNumberish,
      level: BigNumberish,
      expiration_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    canBuy(
      uuid: BytesLike,
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canRenew(uuid: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    canUpgrade(
      uuid: BytesLike,
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    comboLength(overrides?: CallOverrides): Promise<BigNumber>;

    combos(level: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getComboCost(
      level: BigNumberish,
      expiration_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isCustom(
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receipts(uuid: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    renew(
      nonce: BigNumberish,
      uuid: BytesLike,
      tokenIndex: BigNumberish,
      expiration_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenLength(overrides?: CallOverrides): Promise<BigNumber>;

    tokens(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    updateCombo(
      level: BigNumberish,
      combo: {
        bandwidth: BigNumberish;
        storageAmount: BigNumberish;
        buildingTime: BigNumberish;
        pricePerMonth: BigNumberish;
        to: BytesLike;
        isValid: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgrade(
      uuid: BytesLike,
      tokenIndex: BigNumberish,
      level: BigNumberish,
      moreExpiration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addCombo(
      combo: {
        bandwidth: BigNumberish;
        storageAmount: BigNumberish;
        buildingTime: BigNumberish;
        pricePerMonth: BigNumberish;
        to: BytesLike;
        isValid: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buy(
      uuid: BytesLike,
      tokenIndex: BigNumberish,
      level: BigNumberish,
      expiration_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    canBuy(
      uuid: BytesLike,
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canRenew(
      uuid: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canUpgrade(
      uuid: BytesLike,
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    comboLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    combos(
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getComboCost(
      level: BigNumberish,
      expiration_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isCustom(
      level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receipts(
      uuid: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renew(
      nonce: BigNumberish,
      uuid: BytesLike,
      tokenIndex: BigNumberish,
      expiration_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokens(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateCombo(
      level: BigNumberish,
      combo: {
        bandwidth: BigNumberish;
        storageAmount: BigNumberish;
        buildingTime: BigNumberish;
        pricePerMonth: BigNumberish;
        to: BytesLike;
        isValid: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgrade(
      uuid: BytesLike,
      tokenIndex: BigNumberish,
      level: BigNumberish,
      moreExpiration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
