import mongoose from "mongoose";
import Base from '../../base.js';
import { IProject } from '../../@types/types'

class Project extends Base<IProject> {
  constructor(db: mongoose.Connection) {
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
      virtuals: {
        id: {
          get() {
            return this._id;
          }
        }
      },
      toJSON: {
        transform(doc, rest) {
          rest.id = rest._id;
          delete rest._id;
        }
      }
    });
    this.model = db.model<IProject>('project_info', schema);
    Base.models.Project = this.model;
  }
}

export default Project;