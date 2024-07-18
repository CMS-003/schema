import mongoose from "mongoose";
import Base, { CustomParams } from '#base';
import { ICounter } from '#@types/content.js';
declare class Counter extends Base<ICounter> {
    constructor(db: mongoose.Connection, params?: CustomParams<ICounter>);
}
export default Counter;
