import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IMediaLyrics } from '../../@types/content.js'

class MediaLyrics extends Base<IMediaLyrics> {
  constructor(db: mongoose.Connection, params: CustomParams<IMediaLyrics> = {}) {
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

export default MediaLyrics;