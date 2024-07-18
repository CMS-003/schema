import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IMediaPixiv } from '../../@types/content.js';
declare class MediaPixiv extends Base<IMediaPixiv> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IMediaPixiv>) => any;
        };
    });
}
export default MediaPixiv;
