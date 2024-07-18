import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IVersion } from '../../@types/content.js';
declare class Version extends Base<IVersion> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IVersion>) => any;
        };
    });
}
export default Version;
