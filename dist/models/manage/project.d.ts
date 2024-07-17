import mongoose from "mongoose";
import Base from '../../base.js';
import { IProject } from '../../@types/types';
declare class Project extends Base<IProject> {
    constructor(db: mongoose.Connection);
}
export default Project;
