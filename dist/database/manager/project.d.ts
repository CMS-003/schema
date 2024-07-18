import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IProject } from '../../@types/manager.js';
declare class Project extends Base<IProject> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IProject>) => any;
        };
    });
}
export default Project;
