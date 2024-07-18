import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { ITemplate } from '../../@types/manager.js';
declare class Template extends Base<ITemplate> {
    constructor(db: mongoose.Connection, params?: CustomParams<ITemplate>);
}
export default Template;
