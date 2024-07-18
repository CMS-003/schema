import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IWidget } from '../../@types/manager.js';
declare class Widget extends Base<IWidget> {
    constructor(db: mongoose.Connection, params?: CustomParams<IWidget>);
}
export default Widget;
