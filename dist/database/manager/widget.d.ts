import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IWidget } from '../../@types/manager.js';
declare class Widget extends Base<IWidget> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IWidget>) => any;
        };
    });
}
export default Widget;
