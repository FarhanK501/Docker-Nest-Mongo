import { Body, Controller, Get, Post } from '@nestjs/common';
import { DemoDockerService } from './demo-docker.service';

@Controller('demo-docker')
export class DemoDockerController {

    constructor(private readonly demoService: DemoDockerService) { }

    @Post()
    async create(@Body() createExampleDto: any) {
        await this.demoService.create(createExampleDto);
    }

    @Get()
    async findAll() {
        return this.demoService.findAll();
    }
    
}
