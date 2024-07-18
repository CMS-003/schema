import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IChapter } from '../../@types/content.js';
declare class Chapter extends Base<IChapter> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IChapter>) => any;
        };
    });
}
export default Chapter;
