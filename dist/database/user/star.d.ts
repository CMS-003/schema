import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IStar } from '../../@types/user.js';
declare class Star extends Base<IStar> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IStar>) => any;
        };
    });
}
export default Star;
