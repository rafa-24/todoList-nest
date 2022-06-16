import { Schema } from "mongoose";

export const TaskSchema = new Schema({
    title: String,
    description: String,
    expiration_date_at: String,
    create_at: {
        type: Date,
        default: Date.now()
    },
    // aqui hice cambios
    update_at: {
        type: Date,
        default: Date.now()
    }
});