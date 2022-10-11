import { Injectable } from '@nestjs/common';
import { GetBlockIoClient } from 'src/clients/getblockio.client';
import { LitecoinNodeClient } from 'src/clients/litecoin-node';

@Injectable()
export class TransactionsService {
  constructor(private readonly getBlockIoClient: GetBlockIoClient) {}

  findOne() {
    return this.getBlockIoClient.execute();
  }
}
