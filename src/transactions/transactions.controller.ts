import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TransactionsService } from "./transactions.service";
import { ApiTags } from "@nestjs/swagger";
import { CreateTransactionDto } from "./dto/create-transaction.dto";

let domain = "transactions";

@Controller(domain)
@ApiTags(domain)
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {
  }

  @Get(":txid")
  getOne(@Param("txid") txid: string) {
    return this.transactionsService.getOne(txid);
  }

  @Get("block-count")
  getBlockCount() {
    return this.transactionsService.getBlockCount();
  }

  @Post("send")
  sendToAddress(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.sendToAddress(createTransactionDto);
  }
}
