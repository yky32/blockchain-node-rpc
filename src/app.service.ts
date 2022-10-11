import { Inject, Injectable } from '@nestjs/common';
import { LitecoinNodeClient } from './clients/litecoin-node';
@Injectable()
export class AppService {

  constructor(
    private readonly litecoinNodeClient: LitecoinNodeClient
  ) {}

  getHello(): string {
    this.litecoinNodeClient.execute()
    return 'Hello World!';
  }
}
