import { Module } from "@nestjs/common";
import { TransactionsService } from "./transactions.service";
import { TransactionsController } from "./transactions.controller";
import { HttpModule } from "@nestjs/axios";
import { LitecoinNodeClient } from "../clients/litecoin-node";

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5
    })
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService, LitecoinNodeClient]
})
export class TransactionsModule {
}
