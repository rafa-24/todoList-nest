import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Task } from "./interfaces/task.interface";
import { CreateTaskDto } from "./dto/task.dto";

@Injectable()
export class TaskService {
    constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) { }

    async listTask(): Promise<Task[]> {
        const task = await this.taskModel.find();
        return task;
    }

    async getTask(taskID: string): Promise<Task> {
        const task = await this.taskModel.findById(taskID);
        return task;
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        const task = new this.taskModel(createTaskDto);
        return await task.save();
    }

    async editTask(taskID: string, createTaskDto: CreateTaskDto): Promise<Task> {
        const updateTask = this.taskModel.findByIdAndUpdate(taskID, createTaskDto, { new: true });
        return updateTask;
    }

    async deleteTask(taskID: string): Promise<Task> {
        const deleteTask = await this.taskModel.findByIdAndDelete(taskID);
        return deleteTask;
    }

}
