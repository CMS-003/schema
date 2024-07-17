import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IResource } from '../../@types/types';
declare class Resource extends Base<IResource> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IResource>) => any;
        };
    });
}
export default Resource;
