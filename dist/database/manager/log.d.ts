import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { ILog } from '../../@types/manager.js';
declare class Log extends Base<ILog> {
    constructor(db: mongoose.Connection, params?: CustomParams<ILog>);
}
export default Log;
