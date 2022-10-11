import { Controller, Get, Param, Post } from "@nestjs/common";
import { TransactionsService } from "./transactions.service";

@Controller("transactions")
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {
  }

  @Get("account/:account")
  findByAccount(@Param("account") account: string) {
    return this.transactionsService.findByAccount(account);
  }

  @Get("address/:address")
  findByAddress(@Param("address") address: string) {
    return this.transactionsService.findByAddress(address);
  }

  @Post("address")
  createNewAddress() {
    return this.transactionsService.createNewAddress();
  }
}
