/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  StableCoin,
  StableCoinInterface,
} from "../../../contracts/mock/StableCoin";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e9638038062000e96833981016040819052620000349162000270565b8251839083906200004d906003906020850190620000fd565b50805162000063906004906020840190620000fd565b505050620000806200007a620000a760201b60201c565b620000ab565b6005805460ff909216600160a01b0260ff60a01b1990921691909117905550620003329050565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200010b90620002f5565b90600052602060002090601f0160209004810192826200012f57600085556200017a565b82601f106200014a57805160ff19168380011785556200017a565b828001600101855582156200017a579182015b828111156200017a5782518255916020019190600101906200015d565b50620001889291506200018c565b5090565b5b808211156200018857600081556001016200018d565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001cb57600080fd5b81516001600160401b0380821115620001e857620001e8620001a3565b604051601f8301601f19908116603f01168101908282118183101715620002135762000213620001a3565b816040528381526020925086838588010111156200023057600080fd5b600091505b8382101562000254578582018301518183018401529082019062000235565b83821115620002665760008385830101525b9695505050505050565b6000806000606084860312156200028657600080fd5b83516001600160401b03808211156200029e57600080fd5b620002ac87838801620001b9565b94506020860151915080821115620002c357600080fd5b50620002d286828701620001b9565b925050604084015160ff81168114620002ea57600080fd5b809150509250925092565b600181811c908216806200030a57607f821691505b602082108114156200032c57634e487b7160e01b600052602260045260246000fd5b50919050565b610b5480620003426000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d7146101fb578063a9059cbb1461020e578063dd62ed3e14610221578063f2fde38b1461023457600080fd5b806370a08231146101a7578063715018a6146101d05780638da5cb5b146101d857806395d89b41146101f357600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063395093511461017f57806340c10f191461019257600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610247565b60405161010f9190610991565b60405180910390f35b61012b610126366004610a02565b6102d9565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610a2c565b6102f1565b600554600160a01b900460ff1660405160ff909116815260200161010f565b61012b61018d366004610a02565b610315565b6101a56101a0366004610a02565b610337565b005b61013f6101b5366004610a68565b6001600160a01b031660009081526020819052604090205490565b6101a5610345565b6005546040516001600160a01b03909116815260200161010f565b610102610359565b61012b610209366004610a02565b610368565b61012b61021c366004610a02565b6103e8565b61013f61022f366004610a8a565b6103f6565b6101a5610242366004610a68565b610421565b60606003805461025690610abd565b80601f016020809104026020016040519081016040528092919081815260200182805461028290610abd565b80156102cf5780601f106102a4576101008083540402835291602001916102cf565b820191906000526020600020905b8154815290600101906020018083116102b257829003601f168201915b5050505050905090565b6000336102e781858561049a565b5060019392505050565b6000336102ff8582856105be565b61030a858585610638565b506001949350505050565b6000336102e781858561032883836103f6565b6103329190610af8565b61049a565b6103418282610806565b5050565b61034d6108e5565b610357600061093f565b565b60606004805461025690610abd565b6000338161037682866103f6565b9050838110156103db5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61030a828686840361049a565b6000336102e7818585610638565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6104296108e5565b6001600160a01b03811661048e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103d2565b6104978161093f565b50565b6001600160a01b0383166104fc5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103d2565b6001600160a01b03821661055d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103d2565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006105ca84846103f6565b9050600019811461063257818110156106255760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103d2565b610632848484840361049a565b50505050565b6001600160a01b03831661069c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103d2565b6001600160a01b0382166106fe5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103d2565b6001600160a01b038316600090815260208190526040902054818110156107765760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103d2565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107ad908490610af8565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107f991815260200190565b60405180910390a3610632565b6001600160a01b03821661085c5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103d2565b806002600082825461086e9190610af8565b90915550506001600160a01b0382166000908152602081905260408120805483929061089b908490610af8565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6005546001600160a01b031633146103575760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103d2565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600060208083528351808285015260005b818110156109be578581018301518582016040015282016109a2565b818111156109d0576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109fd57600080fd5b919050565b60008060408385031215610a1557600080fd5b610a1e836109e6565b946020939093013593505050565b600080600060608486031215610a4157600080fd5b610a4a846109e6565b9250610a58602085016109e6565b9150604084013590509250925092565b600060208284031215610a7a57600080fd5b610a83826109e6565b9392505050565b60008060408385031215610a9d57600080fd5b610aa6836109e6565b9150610ab4602084016109e6565b90509250929050565b600181811c90821680610ad157607f821691505b60208210811415610af257634e487b7160e01b600052602260045260246000fd5b50919050565b60008219821115610b1957634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220191ff14d1797a3e58b99236deefaabe9c3a5cfb4b3e38c88070f8293c97c403564736f6c63430008090033";

type StableCoinConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StableCoinConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StableCoin__factory extends ContractFactory {
  constructor(...args: StableCoinConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    decimals_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StableCoin> {
    return super.deploy(
      name,
      symbol,
      decimals_,
      overrides || {}
    ) as Promise<StableCoin>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    decimals_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, decimals_, overrides || {});
  }
  override attach(address: string): StableCoin {
    return super.attach(address) as StableCoin;
  }
  override connect(signer: Signer): StableCoin__factory {
    return super.connect(signer) as StableCoin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StableCoinInterface {
    return new utils.Interface(_abi) as StableCoinInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StableCoin {
    return new Contract(address, _abi, signerOrProvider) as StableCoin;
  }
}
