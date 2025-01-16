import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IMediaMusic } from '../../@types/content.js';
declare class MediaMusic extends Base<IMediaMusic> {
    constructor(db: mongoose.Connection, params?: CustomParams<IMediaMusic>);
}
export default MediaMusic;
