import mongoose from "mongoose";
import { Base, ICounter } from '../../@types/types'

class Counter extends Base<ICounter> {
  constructor(db: mongoose.Connection) {
    super();
    const schema = new mongoose.Schema({
      _id: {
        type: String
      },
      resource_id: {
        type: String,
      },
      resource_type: {
        type: String,
      },
      views: {
        type: Number,
        default: 0,
      },
      comments: {
        type: Number,
        default: 0,
      },
      likes: {
        type: Number,
        default: 0,
      },
      shares: {
        type: Number,
        default: 0,
      },
      marks: {
        type: Number,
        default: 0,
      },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'counter_info',
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
    this.model = db.model<ICounter>('counter_info', schema);
    Base.models.Counter = this.model;
  }
}

export default Counter;