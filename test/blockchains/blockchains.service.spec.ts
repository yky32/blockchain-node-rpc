import { Test, TestingModule } from '@nestjs/testing';
import { BlockchainsService } from '../../src/blockchains/blockchains.service';

describe('BlockchainsService', () => {
  let service: BlockchainsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlockchainsService],
    }).compile();

    service = module.get<BlockchainsService>(BlockchainsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
