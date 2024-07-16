import mongoose from "mongoose";
import Base from '../../base.js';
export interface ICounter {
    _id: string;
    resource_id: string;
    resource_type: string;
    views: number;
    comments: number;
    likes: number;
    shares: number;
    marks: number;
}
declare class Counter extends Base<ICounter> {
    constructor(db: mongoose.Connection);
}
export default Counter;
