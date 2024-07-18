import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { ICounter } from '../../@types/content.js';
declare class Counter extends Base<ICounter> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<ICounter>) => any;
        };
    });
}
export default Counter;
