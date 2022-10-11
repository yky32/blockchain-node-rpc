import { Controller, Get, Param, Post } from "@nestjs/common";
import { TransactionsService } from "./transactions.service";
import { ApiTags } from "@nestjs/swagger";

let domain = 'transactions';
@Controller(domain)
@ApiTags(domain)
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
}
