import { Injectable } from "@nestjs/common";
import { LitecoinNodeClient } from "src/clients/litecoin-node";

@Injectable()
export class TransactionsService {
  constructor(
    private readonly litecoinNodeClient: LitecoinNodeClient
  ) {
  }

  findByAccount(account: string) {
    return this.litecoinNodeClient.listTransactionsByAccount(account);
  }

  findByAddress(address: string) {
    return this.litecoinNodeClient.listTransactionsByAddress();
  }

  createNewAddress() {
    return this.litecoinNodeClient.createNewAddress();
  }
}
