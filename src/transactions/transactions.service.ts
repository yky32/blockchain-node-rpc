import { Injectable } from '@nestjs/common';
import { GetBlockIoClient } from 'src/clients/getblockio.client';

@Injectable()
export class TransactionsService {
  constructor(private readonly getBlockIoClient: GetBlockIoClient) {}

  findOne(address: string) {
    return this.getBlockIoClient.execute(address);
  }
}
