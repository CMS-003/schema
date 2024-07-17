import mongoose from "mongoose";
import { Base, ILog } from '../../@types/types';
declare class Log extends Base<ILog> {
    constructor(db: mongoose.Connection);
}
export default Log;
