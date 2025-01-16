import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IMediaALBUM } from '../../@types/content.js';
declare class MediaALBUM extends Base<IMediaALBUM> {
    constructor(db: mongoose.Connection, params?: CustomParams<IMediaALBUM>);
}
export default MediaALBUM;
