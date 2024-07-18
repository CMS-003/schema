import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IComponentType } from '../../@types/manager.js';
declare class ComponentType extends Base<IComponentType> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IComponentType>) => any;
        };
    });
}
export default ComponentType;
