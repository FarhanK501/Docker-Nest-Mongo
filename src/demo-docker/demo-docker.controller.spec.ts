import { Test, TestingModule } from '@nestjs/testing';
import { DemoDockerController } from './demo-docker.controller';

describe('DemoDockerController', () => {
  let controller: DemoDockerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemoDockerController],
    }).compile();

    controller = module.get<DemoDockerController>(DemoDockerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
