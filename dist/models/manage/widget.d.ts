import mongoose from "mongoose";
import Base from '../../base.js';
import { IWidget } from '../../@types/types';
declare class Widget extends Base<IWidget> {
    constructor(db: mongoose.Connection);
}
export default Widget;
