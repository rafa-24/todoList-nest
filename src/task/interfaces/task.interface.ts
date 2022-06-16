// interfaces de nuestro programa y ayudas para el manejo de errores
import { Document } from "mongoose";
export interface Task extends Document {
    readonly title: string;
    readonly description: string;
    readonly expiration_date_at: string;
    readonly create_at: Date;
    readonly update_at: Date;
}