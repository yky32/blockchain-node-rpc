import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { GetBlockIoClient } from 'src/clients/getblockio.client';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, GetBlockIoClient],
})
export class TransactionsModule {}
