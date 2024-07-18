import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IFeedback } from '../../@types/content.js';
declare class Feedback extends Base<IFeedback> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IFeedback>) => any;
        };
    });
}
export default Feedback;
