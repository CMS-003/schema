import mongoose from "mongoose";
import Base from '../../base.js';
export interface IWidget {
    _id: string;
    title: string;
    cover: string;
    desc: string;
    status: number;
    createdAt: Date;
    updatedAt: Date;
}
declare class Widget extends Base<IWidget> {
    constructor(db: mongoose.Connection);
}
export default Widget;
