import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { } from '../../@types/types.js'

export interface ISpider {
  _id: string;
  config: {
    proxy: number;
    from: string;
  };
  header: { [key: string]: string | number },
  name: string;
  desc: string;
  urls: { url: string; enabled: boolean }[];
  pattern: string;
  script: string;
  extra: string;
  status: number;
  createdAt: Date;
}

class Spider extends Base<ISpider> {
  constructor(db: mongoose.Connection, params: { methods?: { [key: string]: Function }, statics?: { [key: string]: (this: Model<ISpider>) => any } } = {}) {
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