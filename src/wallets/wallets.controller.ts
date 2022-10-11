import { Controller, Get, Param, Post } from "@nestjs/common";
import { WalletsService } from "./wallets.service";
import { ApiTags } from "@nestjs/swagger";

let domain = "wallets";

@Controller(domain)
@ApiTags(domain)
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {
  }

  @Post("address")
  create() {
    return this.walletsService.createAddress();
  }

  @Get("balances")
  findAllBalances() {
    return this.walletsService.findAllBalances();
  }


  @Get("address/:address/received")
  listReceivedByAddress(@Param("address") address: string) {
    return this.walletsService.listReceivedByAddress(address);
  }

}
