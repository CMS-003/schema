import mongoose from "mongoose";
import Base, { CustomParams } from '#base';
import { ITask } from '#@types/crawler.js';
declare class Task extends Base<ITask> {
    constructor(db: mongoose.Connection, params?: CustomParams<ITask>);
}
export default Task;
