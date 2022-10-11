import { Injectable } from "@nestjs/common";
import { LitecoinNodeClient } from "../clients/litecoin-node";

@Injectable()
export class WalletsService {
  constructor(private readonly litecoinNodeClient: LitecoinNodeClient) {
  }

  createAddress() {
    return this.litecoinNodeClient.createNewAddress();
  }

  findAllBalances() {
    return this.litecoinNodeClient.listAllBalances();
  }

  findAccountByAddress(address: string) {
    return this.litecoinNodeClient.findAccountByAddress(address);
  }
}
