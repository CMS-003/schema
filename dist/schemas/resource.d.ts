import mongoose from "mongoose";
import Base from '../base.js';
import { IResource } from "../types";
declare class Resource extends Base<IResource> {
    constructor(db: mongoose.Connection);
}
export default Resource;
