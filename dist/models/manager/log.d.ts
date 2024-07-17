import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { ILog } from '../../@types/types';
declare class Log extends Base<ILog> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<ILog>) => any;
        };
    });
}
export default Log;
