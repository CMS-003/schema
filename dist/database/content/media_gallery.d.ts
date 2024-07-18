import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IMediaGallery } from '../../@types/content.js';
declare class MediaGallery extends Base<IMediaGallery> {
    constructor(db: mongoose.Connection, params?: CustomParams<IMediaGallery>);
}
export default MediaGallery;
