import mongoose from "mongoose";
import Base, { CustomParams } from '#base';
import { IProject } from '#@types/manager.js';
declare class Project extends Base<IProject> {
    constructor(db: mongoose.Connection, params?: CustomParams<IProject>);
}
export default Project;
