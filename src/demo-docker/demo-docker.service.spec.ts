import { Test, TestingModule } from '@nestjs/testing';
import { DemoDockerService } from './demo-docker.service';

describe('DemoDockerService', () => {
  let service: DemoDockerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoDockerService],
    }).compile();

    service = module.get<DemoDockerService>(DemoDockerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
