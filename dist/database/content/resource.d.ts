import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IResource } from '../../@types/content.js';
declare class Resource extends Base<IResource> {
    constructor(db: mongoose.Connection, params?: CustomParams<IResource>);
}
export default Resource;
