import mongoose from "mongoose";
import { Base, ILog } from '../../@types/types'

class Log extends Base<ILog> {
  constructor(db: mongoose.Connection) {
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
    this.model = db.model<ILog>('log_info', schema);
    Base.models.Log = this.model;
  }
}

export default Log;