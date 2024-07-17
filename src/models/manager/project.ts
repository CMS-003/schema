import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IProject } from '../../@types/types'

class Project extends Base<IProject> {
  constructor(db: mongoose.Connection, params: { methods?: { [key: string]: Function }, statics?: { [key: string]: (this: Model<IProject>) => any } } = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      title: { type: String },
      cover: { type: String },
      desc: { type: String },
      status: { type: Number },
      createdAt: { type: Date },
      updatedAt: { type: Date },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'project_info',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<IProject>('project_info', schema);
    Base.models.Project = this.model;
  }
}

export default Project;