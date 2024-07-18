import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IPass } from '../../@types/security.js';
declare class Pass extends Base<IPass> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IPass>) => any;
        };
    });
}
export default Pass;
