import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
export interface IConfig {
    _id: string;
    project_id: string;
    name: string;
    desc: string;
    type: string;
    value: any;
    createdAt: Date;
    updatedAt: Date;
}
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
