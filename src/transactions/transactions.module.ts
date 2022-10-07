import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { GetBlockIoClient } from 'src/clients/getblockio.client';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService, GetBlockIoClient],
})
export class TransactionsModule {}
