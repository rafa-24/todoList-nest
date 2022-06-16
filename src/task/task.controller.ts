import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { query } from 'express';

import { CreateTaskDto } from "./dto/task.dto";

import { TaskService } from "./task.service";

@Controller('task')
export class TaskController {

    constructor(private taskService: TaskService) { }

    //Crear una Nueva tarea
    @Post('/create')
    async createPost(@Res() res, @Body() createTaskDto: CreateTaskDto) {
        const task = await this.taskService.createTask(createTaskDto);
        return res.status(HttpStatus.OK).json({
            message: 'Task created sucesfully',
            task: task
        })
    }

    // Obtener todas las tareas
    @Get('/')
    async listTodos(@Res() res) {
        const listTask = await this.taskService.listTask()
        return res.status(HttpStatus.OK).json(listTask)
    }

    //Obtener una tarea en especifico
    @Get('/:taskID')
    async getTask(@Res() resizeBy, @Param('taskID') taskId) {
        const task = await this.taskService.getTask(taskId);
        if (!task) throw new NotFoundException('This Id is invalid');
        return resizeBy.status(HttpStatus.OK).json({
            taskId: task
        });
    }

    // elimina una tarea
    @Delete('/delete')
    async deleteTask(@Res() res, @Query('taskID') taskID) {
        const deletedTask = await this.taskService.deleteTask(taskID);
        if (!deletedTask) throw new NotFoundException('This id does exist');
        return res.status(HttpStatus.OK).json({
            message: 'Task deleted successfully',
            deletedTask
        });
    }

    // ejemplo de la peticion: localhost:3000/task/update?taskID=62ab8e94786dc573b312575d
    // actualizar tarea
    @Put('/update')
    async editTask(@Res() res, @Body() createTaskDto: CreateTaskDto, @Query('taskID') taskID) {
        const updateTask = await this.taskService.editTask(taskID, createTaskDto);
        if (!updateTask) throw new NotFoundException('This id does exist');
        return res.status(HttpStatus.OK).json({
            message: 'Task update successfully',
            updateTask
        });
    }



}
