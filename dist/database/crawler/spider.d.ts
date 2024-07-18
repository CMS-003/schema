import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { ISpider } from '../../@types/crawler.js';
declare class Spider extends Base<ISpider> {
    constructor(db: mongoose.Connection, params?: CustomParams<ISpider>);
}
export default Spider;
