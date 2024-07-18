import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IMediaVideo } from '../../@types/content.js';
declare class MediaVideo extends Base<IMediaVideo> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IMediaVideo>) => any;
        };
    });
}
export default MediaVideo;
