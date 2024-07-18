import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IConfig } from '../../@types/manager.js';
declare class Config extends Base<IConfig> {
    constructor(db: mongoose.Connection, params?: CustomParams<IConfig>);
}
export default Config;
