import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { ISpider } from '../../@types/crawler.js'

class Spider extends Base<ISpider> {
  constructor(db: mongoose.Connection, params: CustomParams<ISpider> = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: {
        type: String,
      },
      name: {
        type: String,
      },
      desc: {
        type: String,
        default: '',
      },
      proxy: {
        type: { proxy: Number, from: String },
      },
      urls: {
        type: [{ url: String, enable: Boolean }],
        default: [],
      },
      pattern: {
        type: String,
      },
      header: {
        type: Object,
        default: {},
      },
      status: {
        type: Number,
        default: 1,
      },
      extra: {
        type: String
      },
      createdAt: {
        type: Date,
      },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'Spider',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<ISpider>('Spider', schema);
    Base.models.Spider = this.model;
  }
}

export default Spider;