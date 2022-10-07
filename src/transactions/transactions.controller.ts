import { Controller, Get, Param } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get(':address/:network')
  findOne(
    @Param('address') address: string,
    @Param('network') network: string,
  ) {
    return this.transactionsService.findOne(address);
  }
}
