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
      },
      comments: {
        type: Number,
      },
      followings: {
        type: Number,
        comment: '关注数',
      },
      followers: {
        type: Number,
        comment: '粉丝数',
      },
      subscribers: {
        type: Number,
        comment: '订阅数',
      },
      shares: {
        type: Number,
      },
      collects: {
        type: Number,
        comment: '收藏数',
      },
      likes: {
        type: Number,
        comment: '赞/喜欢',
      },
      dislikes: {
        type: Number,
        comment: '踩/喜欢',
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