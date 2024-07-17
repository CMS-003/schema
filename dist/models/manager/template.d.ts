import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { ITemplate } from '../../@types/types';
declare class Template extends Base<ITemplate> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<ITemplate>) => any;
        };
    });
}
export default Template;
