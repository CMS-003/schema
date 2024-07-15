import mongoose from "mongoose";
import Base from '../base.js'
import { ILog } from "../types";

class Log extends Base<ILog> {
  constructor(db: mongoose.Connection) {
    super();
    const schema = new mongoose.Schema({
      id: { type: String },
      project_id: { type: String },
      type: { type: String },
      group: { type: String },
      content: { type: String },
      createdAt: { type: Date },
    }, {
      _id: false,
      strict: false,
      collection: 'log_info'
    });
    this.model = db.model<ILog>('log_info', schema);
    Base.models.Log = this.model;
  }
}

export default Log;