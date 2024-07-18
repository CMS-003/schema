import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IMediaSubtitle } from '../../@types/content.js';
declare class MediaSubtitle extends Base<IMediaSubtitle> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IMediaSubtitle>) => any;
        };
    });
}
export default MediaSubtitle;
