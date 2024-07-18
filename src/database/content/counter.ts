import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { ICounter } from '../../@types/content.js'

class Counter extends Base<ICounter> {
  constructor(db: mongoose.Connection, params: CustomParams<ICounter> = {}) {
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
      stars: {
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
      collection: 'Counter',
      statics: params.statics || {},
      methods: params.methods || {},
    });
    this.model = db.model<ICounter>('Counter', schema);
    Base.models.Counter = this.model;
  }
}

export default Counter;