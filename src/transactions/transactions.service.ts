import { Injectable } from '@nestjs/common';
import { GetBlockIoClient } from 'src/clients/getblockio.client';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(private readonly getBlockIoClient: GetBlockIoClient) {}

  findOne(address: string) {
    return this.getBlockIoClient.execute(address);
  }
}
