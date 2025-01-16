import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IMediaCaption } from '../../@types/content.js';
declare class MediaCaption extends Base<IMediaCaption> {
    constructor(db: mongoose.Connection, params?: CustomParams<IMediaCaption>);
}
export default MediaCaption;
