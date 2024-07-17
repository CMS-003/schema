import mongoose from "mongoose";
import { Base, ITask } from '../../@types/types';
declare class Task extends Base<ITask> {
    constructor(db: mongoose.Connection);
}
export default Task;
