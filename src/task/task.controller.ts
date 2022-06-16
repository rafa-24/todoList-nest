import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';

import { CreateTaskDto } from "./dto/task.dto";

@Controller('task')
export class TaskController {
    //TODO: Guardar en la base de datos de mongo db esto
    @Post('/create')
    createPost(@Res() res, @Body() createTaskDto: CreateTaskDto) {
        console.log(createTaskDto);
        return res.status(HttpStatus.OK).json({
            message: 'Task created sucesfully'
        })
    }

    @Get('/todoTask')
    listTodos(@Res() res) {
        res.send('Lista de todas las tareas')
    }

}
