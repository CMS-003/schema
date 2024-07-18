import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { ILog } from '../../@types/manager.js'

class Log extends Base<ILog> {
  constructor(db: mongoose.Connection, params: CustomParams<ILog> = {}) {
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
      collection: 'Log',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<ILog>('Log', schema);
    Base.models.Log = this.model;
  }
}

export default Log;