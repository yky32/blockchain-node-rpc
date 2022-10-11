import { Injectable } from '@nestjs/common';
import { LitecoinNodeClient } from 'src/clients/litecoin-node';
import { CreateTransactionDto } from "./dto/create-transaction.dto";

@Injectable()
export class TransactionsService {
  constructor(private readonly litecoinNodeClient: LitecoinNodeClient) {}

  getBlockCount() {
    return this.litecoinNodeClient.getBlockCount();
  }

  sendToAddress({address, amount}: CreateTransactionDto) {
    return this.litecoinNodeClient.sendToAddress(address, amount);
  }

  getOne(txid: string) {
    return this.litecoinNodeClient.getTransaction(txid);
  }
}
