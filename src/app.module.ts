import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoDockerModule } from './demo-docker/demo-docker.module';

import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DATABASE_URL), DemoDockerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
