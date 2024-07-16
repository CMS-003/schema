import mongoose from "mongoose";
import Base from '../../base.js';
export interface IProject {
    _id: string;
    title: string;
    cover: string;
    desc: string;
    status: number;
    createdAt: Date;
    updatedAt: Date;
}
declare class Project extends Base<IProject> {
    constructor(db: mongoose.Connection);
}
export default Project;
