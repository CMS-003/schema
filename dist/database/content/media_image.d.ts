import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IMediaImage } from '../../@types/content.js';
declare class MediaImage extends Base<IMediaImage> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IMediaImage>) => any;
        };
    });
}
export default MediaImage;
