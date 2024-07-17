import mongoose, { Model } from "mongoose";
import { Base, IConfig } from '../../@types/types';
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