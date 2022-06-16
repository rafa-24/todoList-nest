import { Prop, Schema } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';

@Schema({
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})
export default class CreateTaskDto {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        unique: true
    })
    id?: string;
    @Prop()
    title: string;
    @Prop()
    description: string;
    @Prop()
    expiration_date_at: string;
    @Prop({})
    create_at?: Date;
    @Prop()
    update_at?: Date;
}