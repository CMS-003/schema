import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { ITask } from '../../@types/crawler.js';
declare class Task extends Base<ITask> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<ITask>) => any;
        };
    });
}
export default Task;
