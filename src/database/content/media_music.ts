import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IMediaMusic } from '../../@types/content.js'
import constant from "../../constant.js";

class MediaMusic extends Base<IMediaMusic> {
  constructor(db: mongoose.Connection, params: CustomParams<IMediaMusic> = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      uid: { type: String },
      mid: { type: String, },
      type: { type: Number, default: constant.TYPE.MUSIC.AUDIO },
      title: { type: String },
      path: { type: String },
      url: { type: String },
      nth: { type: Number, default: 1 },
      status: { type: Number },
      createdAt: { type: Date },
      updatedAt: { type: Date },
      more: { type: Object, },
    }, {
      id: true,
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'MediaMusic',
      statics: params.statics || {},
      methods: params.methods || {},
    });
    this.model = db.model<IMediaMusic>('MediaMusic', schema);
    Base.models.MediaMusic = this.model;
  }
}

export default MediaMusic;