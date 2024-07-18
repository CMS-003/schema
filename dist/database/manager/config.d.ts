import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IConfig } from '../../@types/manager.js';
declare class Config extends Base<IConfig> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IConfig>) => any;
        };
    });
}
export default Config;
