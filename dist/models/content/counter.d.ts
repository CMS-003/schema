import mongoose from "mongoose";
import { Base, ICounter } from '../../@types/types';
declare class Counter extends Base<ICounter> {
    constructor(db: mongoose.Connection);
}
export default Counter;
