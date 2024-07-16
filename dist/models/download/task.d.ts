import mongoose from "mongoose";
import Base from '../../base.js';
export interface ITask {
    _id: string;
    name: string;
    type: string;
    proxy: boolean;
    header: object;
    params: object;
    url: string;
    filepath: string;
    retries: number;
    status: number;
    transcode: number;
    createdAt: Date;
}
declare class Task extends Base<ITask> {
    constructor(db: mongoose.Connection);
}
export default Task;
