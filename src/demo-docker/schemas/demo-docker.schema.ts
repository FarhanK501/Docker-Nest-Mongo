import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DemoDockerDocument = DemoDocker & Document;

@Schema()
export class DemoDocker {
    @Prop({ required: true })
    platform: string;

    @Prop({ required: true })
    whichEnd: string;

    @Prop({ required: true})
    by: string;
}

export const DemoDockerSchema = SchemaFactory.createForClass(DemoDocker);