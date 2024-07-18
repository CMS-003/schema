import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { ISns } from '../../@types/user.js';
declare class Sns extends Base<ISns> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<ISns>) => any;
        };
    });
}
export default Sns;
