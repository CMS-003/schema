import mongoose from "mongoose";
import { Base, IWidget } from '../../@types/types';
declare class Widget extends Base<IWidget> {
    constructor(db: mongoose.Connection);
}
export default Widget;
