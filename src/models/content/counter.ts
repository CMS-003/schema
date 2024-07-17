import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { ICounter } from '../../@types/types'

class Counter extends Base<ICounter> {
  constructor(db: mongoose.Connection, params: { methods?: { [key: string]: Function }, statics?: { [key: string]: (this: Model<ICounter>) => any } } = {}) {
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
      statics: params.statics || {},
      methods: params.methods || {},
    });
    this.model = db.model<ICounter>('counter_info', schema);
    Base.models.Counter = this.model;
  }
}

export default Counter;