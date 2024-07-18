import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { ISchedule } from '../../@types/manager.js';
declare class Schedule extends Base<ISchedule> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<ISchedule>) => any;
        };
    });
}
export default Schedule;
