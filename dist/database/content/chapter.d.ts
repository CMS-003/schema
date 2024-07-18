import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IChapter } from '../../@types/content.js';
declare class Chapter extends Base<IChapter> {
    constructor(db: mongoose.Connection, params?: CustomParams<IChapter>);
}
export default Chapter;
