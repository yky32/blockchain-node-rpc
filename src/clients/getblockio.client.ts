import { Injectable } from '@nestjs/common';

@Injectable()
export class GetBlockIoClient {
  execute(address: string) {
    return `This action returns GetBlockIoClient.execute_${address}`;
  }
}
