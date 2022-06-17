import { Schema } from "mongoose";
import { timestamp } from "rxjs";

export const TaskSchema = new Schema({
    title: String,
    description: String,
    expiration_date_at: String,
}, { timestamps: {} });