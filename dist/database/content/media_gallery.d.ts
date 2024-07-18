import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IMediaGallery } from '../../@types/content.js';
declare class MediaGallery extends Base<IMediaGallery> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IMediaGallery>) => any;
        };
    });
}
export default MediaGallery;
