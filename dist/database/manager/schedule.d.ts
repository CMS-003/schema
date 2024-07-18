import mongoose from "mongoose";
import Base, { CustomParams } from '#base';
import { ISchedule } from '#@types/manager.js';
declare class Schedule extends Base<ISchedule> {
    constructor(db: mongoose.Connection, params?: CustomParams<ISchedule>);
}
export default Schedule;
