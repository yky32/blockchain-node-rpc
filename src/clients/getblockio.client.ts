import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetBlockIoClient {
  constructor(private readonly httpService: HttpService) {}

  execute(address: string) {
    const config = {};
    return this.httpService.get(`https://www.googke.com`, config);
  }
}
