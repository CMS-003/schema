import mongoose from "mongoose";
import { Base, IResource } from '../../@types/types';
declare class Resource extends Base<IResource> {
    constructor(db: mongoose.Connection);
}
export default Resource;
