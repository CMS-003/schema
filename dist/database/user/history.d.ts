import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IHistory } from '../../@types/user.js';
declare class History extends Base<IHistory> {
    constructor(db: mongoose.Connection, params?: CustomParams<IHistory>);
}
export default History;
