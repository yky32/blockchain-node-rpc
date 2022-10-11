import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TransactionsModule } from "./transactions/transactions.module";
import { getEnvPath } from "./common/helper/env.helper";
import { WalletsModule } from './wallets/wallets.module';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    TransactionsModule,
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true
    }),
    WalletsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
