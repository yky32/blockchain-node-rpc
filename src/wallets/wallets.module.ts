import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { LitecoinNodeClient } from "../clients/litecoin-node";

@Module({
  controllers: [WalletsController],
  providers: [WalletsService, LitecoinNodeClient]
})
export class WalletsModule {}
