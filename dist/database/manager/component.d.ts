import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IComponent } from '../../@types/manager.js';
declare class Component extends Base<IComponent> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IComponent>) => any;
        };
    });
}
export default Component;
