import mongoose from "mongoose";
import Base from '../base.js';
import { IConfig } from "../types";
declare class Config extends Base<IConfig> {
    constructor(db: mongoose.Connection);
}
export default Config;
