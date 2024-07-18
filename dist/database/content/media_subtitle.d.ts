import mongoose from "mongoose";
import Base, { CustomParams } from '#base';
import { IMediaSubtitle } from '#@types/content.js';
declare class MediaSubtitle extends Base<IMediaSubtitle> {
    constructor(db: mongoose.Connection, params?: CustomParams<IMediaSubtitle>);
}
export default MediaSubtitle;
