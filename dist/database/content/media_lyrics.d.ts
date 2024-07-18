import mongoose from "mongoose";
import Base, { CustomParams } from '#base';
import { IMediaLyrics } from '#@types/content.js';
declare class MediaLyrics extends Base<IMediaLyrics> {
    constructor(db: mongoose.Connection, params?: CustomParams<IMediaLyrics>);
}
export default MediaLyrics;
