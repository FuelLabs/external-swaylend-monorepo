/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.94.9
*/

import { Contract, ContractFactory, decompressBytecode } from "fuels";
import type { Provider, Account, DeployContractOptions, DeployContractResult } from "fuels";

import { Src20 } from "./Src20";

const bytecode = decompressBytecode("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");

export class Src20Factory extends ContractFactory {

  static readonly bytecode = bytecode;

  constructor(accountOrProvider: Account | Provider) {
    super(bytecode, Src20.abi, accountOrProvider);
  }

  deploy<TContract extends Contract = Contract>(
    deployOptions?: DeployContractOptions
  ): Promise<DeployContractResult<TContract>> {
    return super.deploy({
      storageSlots: Src20.storageSlots,
      ...deployOptions,
    });
  }

  static async deploy (
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<Src20>> {
    const factory = new Src20Factory(wallet);
    return factory.deploy(options);
  }
}
