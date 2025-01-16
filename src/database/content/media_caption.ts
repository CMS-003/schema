import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IMediaCaption } from '../../@types/content.js'

class MediaCaption extends Base<IMediaCaption> {
  constructor(db: mongoose.Connection, params: CustomParams<IMediaCaption> = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      uid: { type: String },
      mid: { type: String, },
      mtype: { type: String, },
      type: { type: Number },
      title: { type: String },
      path: { type: String },
      url: { type: String },
      nth: { type: Number, default: 1 },
      status: { type: Number },
      createdAt: { type: Date },
      updatedAt: { type: Date },
      more: { type: Object, default: {} },
    }, {
      id: true,
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'MediaCaption',
      statics: params.statics || {},
      methods: params.methods || {},
    });
    this.model = db.model<IMediaCaption>('MediaCaption', schema);
    Base.models.MediaCaption = this.model;
  }
}

export default MediaCaption;