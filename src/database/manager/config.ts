import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IConfig } from '../../@types/manager.js'



class Config extends Base<IConfig> {
  constructor(db: mongoose.Connection, params: { methods?: { [key: string]: Function }, statics?: { [key: string]: (this: Model<IConfig>) => any } } = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      project_id: { type: String },
      type: { type: String },
      title: { type: String },
      desc: { type: String },
      order: { type: Number },
      value: { type: Object },
      createdAt: { type: Date },
      updatedAt: { type: Date },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'config_info',
      statics: params.statics || {},
      methods: params.methods || {},
    });
    this.model = db.model<IConfig>('config_info', schema);
    Base.models.Config = this.model;
  }
}

export default Config;