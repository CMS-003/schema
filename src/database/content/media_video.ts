import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IMediaVideo } from '../../@types/content.js'

class MediaVideo extends Base<IMediaVideo> {
  constructor(db: mongoose.Connection, params: CustomParams<IMediaVideo> = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      uid: { type: String },
      mid: { type: String },
      mtype: { type: String },
      type: { type: Number },
      title: { type: String },
      path: { type: String },
      url: { type: String },
      cover: { type: String },
      nth: { type: Number, default: 1 },
      status: { type: Number },
      createdAt: { type: Date },
      updatedAt: { type: Date },
      more: { type: Object, default: {} },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'MediaVideo',
      statics: params.statics || {},
      methods: params.methods || {},
    });
    this.model = db.model<IMediaVideo>('MediaVideo', schema);
    Base.models.MediaVideo = this.model;
  }
}

export default MediaVideo;