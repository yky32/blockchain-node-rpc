import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GetBlockIoClient {
  constructor(private readonly httpService: HttpService) {}

  async execute(address: string) {
    const config = {
      headers: {
        'x-api-key': '60a12f63-a1c8-446b-8cc6-a94c1a0f62a2',
      },
    };
    const data = {
      jsonrpc: '2.0',
      method: 'getblockhash',
      params: [2346271],
      id: 'getblock.io',
    };

    const response = await firstValueFrom(
      this.httpService.post(`https://ltc.getblock.io/mainnet/`, data, config),
    );

    if (response) {
      return response.data;
    } else {
      // exception here.
    }
  }
}
