import mongoose from "mongoose";
import Base from '../base.js'
import { v4 } from "uuid";
import { ICounter } from "../types";

class Counter extends Base<ICounter> {
  constructor(db: mongoose.Connection) {
    super();
    const schema = new mongoose.Schema({
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
      _id: false,
      strict: false,
      excludeIndexes: true,
      timestamps: true,
      collection: 'counter'
    });
    this.model = db.model<ICounter>('Counter', schema);
    Base.models.Counter = this.model;
  }
}

export default Counter;