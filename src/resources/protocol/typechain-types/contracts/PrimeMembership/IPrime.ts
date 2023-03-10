/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace IPrime {
  export type MemberStruct = {
    riskScore: PromiseOrValue<BigNumberish>;
    status: PromiseOrValue<BigNumberish>;
    created: PromiseOrValue<boolean>;
  };

  export type MemberStructOutput = [BigNumber, number, boolean] & {
    riskScore: BigNumber;
    status: number;
    created: boolean;
  };
}

export interface IPrimeInterface extends utils.Interface {
  functions: {
    "borrowRate(uint256,uint256)": FunctionFragment;
    "feeCollector()": FunctionFragment;
    "isAssetAvailable(address)": FunctionFragment;
    "isMember(address)": FunctionFragment;
    "membershipOf(address)": FunctionFragment;
    "penaltyRate(uint256)": FunctionFragment;
    "protocolFeeRate()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "borrowRate"
      | "feeCollector"
      | "isAssetAvailable"
      | "isMember"
      | "membershipOf"
      | "penaltyRate"
      | "protocolFeeRate"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "borrowRate",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "feeCollector",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAssetAvailable",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isMember",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "membershipOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "penaltyRate",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "protocolFeeRate",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "borrowRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeCollector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAssetAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isMember", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "membershipOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "penaltyRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolFeeRate",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IPrime extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPrimeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    borrowRate(
      interestRate: PromiseOrValue<BigNumberish>,
      interval: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    feeCollector(overrides?: CallOverrides): Promise<[string]>;

    isAssetAvailable(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isMember(
      _member: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    membershipOf(
      _member: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[IPrime.MemberStructOutput]>;

    penaltyRate(
      interval: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    protocolFeeRate(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  borrowRate(
    interestRate: PromiseOrValue<BigNumberish>,
    interval: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  feeCollector(overrides?: CallOverrides): Promise<string>;

  isAssetAvailable(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isMember(
    _member: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  membershipOf(
    _member: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<IPrime.MemberStructOutput>;

  penaltyRate(
    interval: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  protocolFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    borrowRate(
      interestRate: PromiseOrValue<BigNumberish>,
      interval: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feeCollector(overrides?: CallOverrides): Promise<string>;

    isAssetAvailable(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isMember(
      _member: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    membershipOf(
      _member: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<IPrime.MemberStructOutput>;

    penaltyRate(
      interval: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    protocolFeeRate(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    borrowRate(
      interestRate: PromiseOrValue<BigNumberish>,
      interval: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feeCollector(overrides?: CallOverrides): Promise<BigNumber>;

    isAssetAvailable(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isMember(
      _member: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    membershipOf(
      _member: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    penaltyRate(
      interval: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    protocolFeeRate(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    borrowRate(
      interestRate: PromiseOrValue<BigNumberish>,
      interval: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeCollector(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAssetAvailable(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isMember(
      _member: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    membershipOf(
      _member: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    penaltyRate(
      interval: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    protocolFeeRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
