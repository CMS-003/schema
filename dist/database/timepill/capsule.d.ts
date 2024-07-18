import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { ICapsule } from '../../@types/timepill.js';
declare class Capsule extends Base<ICapsule> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<ICapsule>) => any;
        };
    });
}
export default Capsule;
