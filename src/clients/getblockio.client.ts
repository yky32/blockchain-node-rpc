import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

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
      // exception here.
    }
  }
}
