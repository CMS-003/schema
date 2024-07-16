import mongoose from "mongoose";
import Base from '../../base.js';
export interface ILog {
    _id: string;
    type: string;
    group: string;
    content: string;
    createdAt: string;
}
declare class Log extends Base<ILog> {
    constructor(db: mongoose.Connection);
}
export default Log;
