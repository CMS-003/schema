import mongoose from "mongoose";
import Base, { CustomParams } from '#base';
import { IMediaPixiv } from '#@types/content.js';
declare class MediaPixiv extends Base<IMediaPixiv> {
    constructor(db: mongoose.Connection, params?: CustomParams<IMediaPixiv>);
}
export default MediaPixiv;
