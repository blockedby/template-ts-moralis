/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPrime,
  IPrimeInterface,
} from "../../../contracts/PrimeMembership/IPrime";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "interestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interval",
        type: "uint256",
      },
    ],
    name: "borrowRate",
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
    name: "feeCollector",
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
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "isAssetAvailable",
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
        name: "_member",
        type: "address",
      },
    ],
    name: "isMember",
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
        name: "_member",
        type: "address",
      },
    ],
    name: "membershipOf",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "riskScore",
            type: "uint256",
          },
          {
            internalType: "enum IPrime.MemberStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "created",
            type: "bool",
          },
        ],
        internalType: "struct IPrime.Member",
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
        internalType: "uint256",
        name: "interval",
        type: "uint256",
      },
    ],
    name: "penaltyRate",
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
    name: "protocolFeeRate",
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
];

export class IPrime__factory {
  static readonly abi = _abi;
  static createInterface(): IPrimeInterface {
    return new utils.Interface(_abi) as IPrimeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IPrime {
    return new Contract(address, _abi, signerOrProvider) as IPrime;
  }
}