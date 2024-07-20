import { Module } from '@nestjs/common';
import { DemoDockerController } from './demo-docker.controller';
import { DemoDockerService } from './demo-docker.service';
import { DemoDocker, DemoDockerSchema } from './schemas/demo-docker.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature
    ([{ name: DemoDocker.name, schema: DemoDockerSchema }])],
  controllers: [DemoDockerController],
  providers: [DemoDockerService]
})
export class DemoDockerModule {}
