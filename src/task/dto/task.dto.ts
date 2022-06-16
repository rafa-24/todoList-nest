// data transfer object estos son los datos que se envian el cliente y el server
//TODO:  usar class validator
export class CreateTaskDto {
    id?: string;
    title: string;
    description: string;
    expiration_date_at: string;
    create_at?: Date;
    update_at?: Date;
}