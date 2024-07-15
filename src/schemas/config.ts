import mongoose from "mongoose";
import Base from '../base.js'
import { IConfig } from "../types";

class Config extends Base<IConfig> {
  constructor(db: mongoose.Connection) {
    super();
    const schema = new mongoose.Schema({
      id: { type: String },
      project_id: { type: String },
      name: { type: String },
      type: { type: String },
      title: { type: String },
      desc: { type: String },
      order: { type: Number },
      value: { type: Object },
      createdAt: { type: Date },
      updatedAt: { type: Date },
    }, {
      _id: false,
      strict: false,
      excludeIndexes: true,
      collection: 'config_info'
    });
    this.model = db.model<IConfig>('config_info', schema);
    Base.models.Config = this.model;
  }
}

export default Config;