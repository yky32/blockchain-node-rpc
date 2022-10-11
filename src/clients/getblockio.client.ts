import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { Client } from 'litecoin';

const client = new Client({
  host: 'localhost',
  port: 19443,
  user: 'admin',
  pass: '123456',
  timeout: 30000,
  ssl: false
});

@Injectable()
export class GetBlockIoClient {
  @Inject(ConfigService)
  public config: ConfigService;

  constructor(private readonly httpService: HttpService) {}

  async execute(address: string) {
    const apiKey: string = this.config.get('API_KEY');
    const config = {
      headers: {
        'x-api-key': apiKey,
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
      throw new Error('Response error.');
    }
  }
}
