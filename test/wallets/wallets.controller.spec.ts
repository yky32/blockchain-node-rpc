import { Test, TestingModule } from '@nestjs/testing';
import { WalletsController } from '../../src/wallets/wallets.controller';
import { WalletsService } from '../../src/wallets/wallets.service';

describe('WalletsController', () => {
  let controller: WalletsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WalletsController],
      providers: [WalletsService],
    }).compile();

    controller = module.get<WalletsController>(WalletsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
