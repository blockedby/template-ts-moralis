/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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

export declare namespace IOrder {
  export type OrderStruct = {
    currentSize: PromiseOrValue<BigNumberish>;
    maxSize: PromiseOrValue<BigNumberish>;
    tenor: PromiseOrValue<BigNumberish>;
    depositWindow: PromiseOrValue<BigNumberish>;
    rateMantissa: PromiseOrValue<BigNumberish>;
    maturityDate: PromiseOrValue<BigNumberish>;
    depositMaturity: PromiseOrValue<BigNumberish>;
    activeRollId: PromiseOrValue<BigNumberish>;
    isPublic: PromiseOrValue<boolean>;
    isClosed: PromiseOrValue<boolean>;
    asset: PromiseOrValue<string>;
    creator: PromiseOrValue<string>;
    protocolFeeRate: PromiseOrValue<BigNumberish>;
  };

  export type OrderStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    boolean,
    string,
    string,
    BigNumber
  ] & {
    currentSize: BigNumber;
    maxSize: BigNumber;
    tenor: BigNumber;
    depositWindow: BigNumber;
    rateMantissa: BigNumber;
    maturityDate: BigNumber;
    depositMaturity: BigNumber;
    activeRollId: BigNumber;
    isPublic: boolean;
    isClosed: boolean;
    asset: string;
    creator: string;
    protocolFeeRate: BigNumber;
  };
}

export interface IOrderInterface extends utils.Interface {
  functions: {
    "balanceOf(uint256,address)": FunctionFragment;
    "blacklistLenders(uint256,bytes)": FunctionFragment;
    "cancelCallBack(uint256)": FunctionFragment;
    "closeOrder(uint256)": FunctionFragment;
    "createOrder(address,uint256,uint256,uint256,uint256,bytes)": FunctionFragment;
    "dueOf(uint256,address)": FunctionFragment;
    "getOrderData(uint256)": FunctionFragment;
    "lend(uint256,uint256)": FunctionFragment;
    "penaltyOf(uint256,address)": FunctionFragment;
    "rejectRoll(uint256)": FunctionFragment;
    "repay(uint256,address)": FunctionFragment;
    "repayAll(uint256)": FunctionFragment;
    "requestCallBack(uint256)": FunctionFragment;
    "rollOrder(uint256)": FunctionFragment;
    "switchToPublic(uint256)": FunctionFragment;
    "totalDueOf(uint256)": FunctionFragment;
    "whitelistLenders(uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "balanceOf"
      | "blacklistLenders"
      | "cancelCallBack"
      | "closeOrder"
      | "createOrder"
      | "dueOf"
      | "getOrderData"
      | "lend"
      | "penaltyOf"
      | "rejectRoll"
      | "repay"
      | "repayAll"
      | "requestCallBack"
      | "rollOrder"
      | "switchToPublic"
      | "totalDueOf"
      | "whitelistLenders"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "blacklistLenders",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelCallBack",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "closeOrder",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createOrder",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "dueOf",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderData",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "lend",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "penaltyOf",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "rejectRoll",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "repay",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "repayAll",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "requestCallBack",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "rollOrder",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "switchToPublic",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalDueOf",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistLenders",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "blacklistLenders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelCallBack",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "closeOrder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dueOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getOrderData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lend", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "penaltyOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rejectRoll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "repay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "repayAll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestCallBack",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rollOrder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "switchToPublic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "totalDueOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whitelistLenders",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IOrder extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOrderInterface;

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
    balanceOf(
      orderId: PromiseOrValue<BigNumberish>,
      lender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    blacklistLenders(
      orderId: PromiseOrValue<BigNumberish>,
      lenders: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancelCallBack(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    closeOrder(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createOrder(
      asset: PromiseOrValue<string>,
      size: PromiseOrValue<BigNumberish>,
      tenor: PromiseOrValue<BigNumberish>,
      rateMantissa: PromiseOrValue<BigNumberish>,
      depositWindow: PromiseOrValue<BigNumberish>,
      members: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dueOf(
      orderId: PromiseOrValue<BigNumberish>,
      lender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { due: BigNumber; protocolFee: BigNumber }
    >;

    getOrderData(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IOrder.OrderStructOutput] & { info: IOrder.OrderStructOutput }>;

    lend(
      orderId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    penaltyOf(
      orderId: PromiseOrValue<BigNumberish>,
      lender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rejectRoll(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    repay(
      orderId: PromiseOrValue<BigNumberish>,
      lender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    repayAll(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requestCallBack(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rollOrder(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    switchToPublic(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalDueOf(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { totalDue: BigNumber }>;

    whitelistLenders(
      orderId: PromiseOrValue<BigNumberish>,
      lenders: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  balanceOf(
    orderId: PromiseOrValue<BigNumberish>,
    lender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  blacklistLenders(
    orderId: PromiseOrValue<BigNumberish>,
    lenders: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancelCallBack(
    orderId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  closeOrder(
    orderId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createOrder(
    asset: PromiseOrValue<string>,
    size: PromiseOrValue<BigNumberish>,
    tenor: PromiseOrValue<BigNumberish>,
    rateMantissa: PromiseOrValue<BigNumberish>,
    depositWindow: PromiseOrValue<BigNumberish>,
    members: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dueOf(
    orderId: PromiseOrValue<BigNumberish>,
    lender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { due: BigNumber; protocolFee: BigNumber }
  >;

  getOrderData(
    orderId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IOrder.OrderStructOutput>;

  lend(
    orderId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  penaltyOf(
    orderId: PromiseOrValue<BigNumberish>,
    lender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rejectRoll(
    orderId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  repay(
    orderId: PromiseOrValue<BigNumberish>,
    lender: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  repayAll(
    orderId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requestCallBack(
    orderId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rollOrder(
    orderId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  switchToPublic(
    orderId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalDueOf(
    orderId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  whitelistLenders(
    orderId: PromiseOrValue<BigNumberish>,
    lenders: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(
      orderId: PromiseOrValue<BigNumberish>,
      lender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    blacklistLenders(
      orderId: PromiseOrValue<BigNumberish>,
      lenders: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    cancelCallBack(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    closeOrder(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    createOrder(
      asset: PromiseOrValue<string>,
      size: PromiseOrValue<BigNumberish>,
      tenor: PromiseOrValue<BigNumberish>,
      rateMantissa: PromiseOrValue<BigNumberish>,
      depositWindow: PromiseOrValue<BigNumberish>,
      members: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    dueOf(
      orderId: PromiseOrValue<BigNumberish>,
      lender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { due: BigNumber; protocolFee: BigNumber }
    >;

    getOrderData(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IOrder.OrderStructOutput>;

    lend(
      orderId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    penaltyOf(
      orderId: PromiseOrValue<BigNumberish>,
      lender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rejectRoll(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    repay(
      orderId: PromiseOrValue<BigNumberish>,
      lender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    repayAll(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    requestCallBack(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    rollOrder(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    switchToPublic(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    totalDueOf(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    whitelistLenders(
      orderId: PromiseOrValue<BigNumberish>,
      lenders: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    balanceOf(
      orderId: PromiseOrValue<BigNumberish>,
      lender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    blacklistLenders(
      orderId: PromiseOrValue<BigNumberish>,
      lenders: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancelCallBack(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    closeOrder(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createOrder(
      asset: PromiseOrValue<string>,
      size: PromiseOrValue<BigNumberish>,
      tenor: PromiseOrValue<BigNumberish>,
      rateMantissa: PromiseOrValue<BigNumberish>,
      depositWindow: PromiseOrValue<BigNumberish>,
      members: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dueOf(
      orderId: PromiseOrValue<BigNumberish>,
      lender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrderData(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lend(
      orderId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    penaltyOf(
      orderId: PromiseOrValue<BigNumberish>,
      lender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rejectRoll(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    repay(
      orderId: PromiseOrValue<BigNumberish>,
      lender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    repayAll(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requestCallBack(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rollOrder(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    switchToPublic(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalDueOf(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    whitelistLenders(
      orderId: PromiseOrValue<BigNumberish>,
      lenders: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      orderId: PromiseOrValue<BigNumberish>,
      lender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    blacklistLenders(
      orderId: PromiseOrValue<BigNumberish>,
      lenders: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancelCallBack(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    closeOrder(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createOrder(
      asset: PromiseOrValue<string>,
      size: PromiseOrValue<BigNumberish>,
      tenor: PromiseOrValue<BigNumberish>,
      rateMantissa: PromiseOrValue<BigNumberish>,
      depositWindow: PromiseOrValue<BigNumberish>,
      members: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dueOf(
      orderId: PromiseOrValue<BigNumberish>,
      lender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrderData(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lend(
      orderId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    penaltyOf(
      orderId: PromiseOrValue<BigNumberish>,
      lender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rejectRoll(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    repay(
      orderId: PromiseOrValue<BigNumberish>,
      lender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    repayAll(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requestCallBack(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rollOrder(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    switchToPublic(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalDueOf(
      orderId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelistLenders(
      orderId: PromiseOrValue<BigNumberish>,
      lenders: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}