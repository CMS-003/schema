
import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IMediaALBUM } from '../../@types/content.js'
import constant from "#constant.js";

class MediaALBUM extends Base<IMediaALBUM> {
  constructor(db: mongoose.Connection, params: CustomParams<IMediaALBUM> = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      uid: { type: String, },
      mid: { type: String, },
      mtype: { type: String, },
      type: { type: Number, default: constant.TYPE.IMAGE },
      title: { type: String },
      path: { type: String },
      url: { type: String },
      nth: { type: Number, default: 1 },
      status: { type: Number, default: constant.STATUS.INITIAL },
      createdAt: { type: Date },
      updatedAt: { type: Date },
      more: { type: Object, default: {} },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'MediaALBUM',
      statics: params.statics || {},
      methods: params.methods || {},
    });
    this.model = db.model<IMediaALBUM>('MediaALBUM', schema);
    Base.models.MediaALBUM = this.model;
  }
}

export default MediaALBUM;