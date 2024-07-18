import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { ISpider } from '../../@types/crawler.js';
declare class Spider extends Base<ISpider> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<ISpider>) => any;
        };
    });
}
export default Spider;
