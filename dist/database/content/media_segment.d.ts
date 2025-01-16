import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IMediaSegment } from '../../@types/content.js';
declare class MediaSegment extends Base<IMediaSegment> {
    constructor(db: mongoose.Connection, params?: CustomParams<IMediaSegment>);
}
export default MediaSegment;
