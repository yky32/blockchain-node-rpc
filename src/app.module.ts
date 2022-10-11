import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { getEnvPath } from './common/helper/env.helper';
import { LitecoinNodeClient } from './clients/litecoin-node';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    TransactionsModule,
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, LitecoinNodeClient],
})
export class AppModule {}
