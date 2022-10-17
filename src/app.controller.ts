import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { LitecoinNodeClient } from "./litecoin-node";

@Controller()
export class AppController {
  constructor(private readonly litecoinNodeClient: LitecoinNodeClient) {
  }

  @Post("wallet")
  createWallet(
    @Body() dto: { accountName: string }
  ) {
    return this.litecoinNodeClient.createWallet(dto.accountName);
  }

  @Post("wallet/:accountName/address")
  createNewAddress(
    @Param("accountName") accountName: string,
    @Body() dto: { addressName: string }
  ) {
    return this.litecoinNodeClient.createNewAddress(accountName, dto.addressName);
  }

  @Post("wallet/:accountName/generate")
  generateToAddress(
    @Param("accountName") accountName: string,
    @Body() dto: { amount: number, address: string }
  ) {
    return this.litecoinNodeClient.generateToAddress(accountName, dto.amount, dto.address);
  }

  @Get("wallet/:accountName/balance")
  getBalance(
    @Param("accountName") accountName: string
  ) {
    return this.litecoinNodeClient.getBalance(accountName);
  }

  @Post("wallet/:accountName/send")
  sendToAddress(
    @Param("accountName") accountName: string,
    @Body() dto: { address: string, amount: number }
  ) {
    return this.litecoinNodeClient.sendToAddress(accountName, dto.address, dto.amount);
  }

  @Get("/txn/:accountName/id/:txId")
  listTxnsById(
    @Param("accountName") accountName: string,
    @Param("txId") txId: string
  ) {
    return this.litecoinNodeClient.listTxnsById(accountName, txId);
  }


  @Get("txn/:accountName/address/:address")
  listTxnsByAddress(
      @Param("accountName") accountName: string,
      @Param("address") address: string
  ) {
    return this.litecoinNodeClient.listTxnsByAddress(accountName, address);
  }


  // __ Wrapped Up with listTxnsByAddress and listTxnsById
  @Get("txn/detail/:address")
  listTxnsDetailByAddress(
    @Param("address") address: string
  ) {
    this.litecoinNodeClient.listTxnsDetailByAddress(address);
  }

}
