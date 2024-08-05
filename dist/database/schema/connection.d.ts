import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IConnection } from '../../@types/schema.js';
declare class Connection extends Base<IConnection> {
    constructor(db: mongoose.Connection, params?: CustomParams<IConnection>);
}
export default Connection;
