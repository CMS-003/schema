import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IMediaLyrics } from '../../@types/content.js';
declare class Image extends Base<IMediaLyrics> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IMediaLyrics>) => any;
        };
    });
}
export default Image;
