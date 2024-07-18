import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IMediaImage } from '../../@types/content.js';
declare class MediaImage extends Base<IMediaImage> {
    constructor(db: mongoose.Connection, params?: CustomParams<IMediaImage>);
}
export default MediaImage;
