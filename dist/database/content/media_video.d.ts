import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IMediaVideo } from '../../@types/content.js';
declare class MediaVideo extends Base<IMediaVideo> {
    constructor(db: mongoose.Connection, params?: CustomParams<IMediaVideo>);
}
export default MediaVideo;
