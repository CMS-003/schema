import mongoose from "mongoose";
import Base from '../../base.js';
import { ILog } from '../../@types/types';
declare class Log extends Base<ILog> {
    constructor(db: mongoose.Connection);
}
export default Log;
