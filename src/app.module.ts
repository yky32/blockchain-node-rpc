import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockchainsModule } from './blockchains/blockchains.module';

@Module({
  imports: [BlockchainsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
