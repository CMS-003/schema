import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IMediaChapter } from '../../@types/content.js';
declare class MediaChapter extends Base<IMediaChapter> {
    constructor(db: mongoose.Connection, params?: CustomParams<IMediaChapter>);
}
export default MediaChapter;
