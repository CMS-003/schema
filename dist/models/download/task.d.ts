import mongoose from "mongoose";
import Base from '../../base.js';
import { ITask } from '../../@types/types';
declare class Task extends Base<ITask> {
    constructor(db: mongoose.Connection);
}
export default Task;
