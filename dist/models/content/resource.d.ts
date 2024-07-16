import mongoose from "mongoose";
import Base from '../../base.js';
export interface IResource {
    _id: string;
    title: string;
    desc: string;
    createdAt: Date;
    updatedAt: Date;
}
declare class Resource extends Base<IResource> {
    constructor(db: mongoose.Connection);
}
export default Resource;
