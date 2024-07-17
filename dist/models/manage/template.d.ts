import mongoose from "mongoose";
import Base from '../../base.js';
import { ITemplate } from '../../@types/types';
declare class Template extends Base<ITemplate> {
    constructor(db: mongoose.Connection);
}
export default Template;
