/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC20Lite,
  IERC20LiteInterface,
} from "../../../../contracts/Order/IERC20.sol/IERC20Lite";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IERC20Lite__factory {
  static readonly abi = _abi;
  static createInterface(): IERC20LiteInterface {
    return new utils.Interface(_abi) as IERC20LiteInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC20Lite {
    return new Contract(address, _abi, signerOrProvider) as IERC20Lite;
  }
}