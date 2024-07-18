
import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IMediaLyrics } from '../../@types/content.js'

class Image extends Base<IMediaLyrics> {
  constructor(db: mongoose.Connection, params: { methods?: { [key: string]: Function }, statics?: { [key: string]: (this: Model<IMediaLyrics>) => any } } = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: {
        type: String
      },
      resource_id: {
        type: String,
      },
      type: { type: String },
      title: { type: String },
      path: { type: String },
      url: { type: String },
      nth: { type: Number },
      status: { type: Number },
      createdAt: { type: Date },
      updatedAt: { type: Date },
      more: {
        type: Object,
      },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'MediaLyrics',
      statics: params.statics || {},
      methods: params.methods || {},
    });
    this.model = db.model<IMediaLyrics>('MediaLyrics', schema);
    Base.models.MediaLyrics = this.model;
  }
}

export default Image;