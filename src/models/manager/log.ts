import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { ILog } from '../../@types/types'

class Log extends Base<ILog> {
  constructor(db: mongoose.Connection, params: { methods?: { [key: string]: Function }, statics?: { [key: string]: (this: Model<ILog>) => any } } = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      project_id: { type: String },
      type: { type: String },
      group: { type: String },
      content: { type: String },
      createdAt: { type: Date },
    }, {
      strict: false,
      versionKey: false,
      collection: 'log_info',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<ILog>('log_info', schema);
    Base.models.Log = this.model;
  }
}

export default Log;