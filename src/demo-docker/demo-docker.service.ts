import { Injectable } from '@nestjs/common';
import { DemoDocker, DemoDockerDocument } from './schemas/demo-docker.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DemoDockerService {
    constructor(@InjectModel(DemoDocker.name) private demoDockerModel: Model<DemoDockerDocument>) { }

    async create(createDempDockerDto: any): Promise<DemoDocker> {
        const dempExample = new this.demoDockerModel(createDempDockerDto);
        return dempExample.save();
    }

    async findAll(): Promise<DemoDocker[]> {
        return this.demoDockerModel.find().exec();
    }
}
