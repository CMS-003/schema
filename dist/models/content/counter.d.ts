import mongoose from "mongoose";
import Base from '../../base.js';
import { ICounter } from '../../@types/types';
declare class Counter extends Base<ICounter> {
    constructor(db: mongoose.Connection);
}
export default Counter;
