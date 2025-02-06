import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IMediaChapter } from '../../@types/content.js'
import CONST from 'const'

class MediaChapter extends Base<IMediaChapter> {
  constructor(db: mongoose.Connection, params: CustomParams<IMediaChapter> = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      uid: { type: String },
      mid: { type: String, },
      mtype: { type: String, },
      title: { type: String, },
      content: { type: String, },
      url: { type: String, },
      path: { type: String, },
      type: { type: Number },
      status: { type: Number, default: CONST.STATUS.INITIAL },
      nth: { type: Number, default: 1 },
      createdAt: { type: Date },
      updatedAt: { type: Date },
      more: { type: Object, default: {} },
    }, {
      id: true,
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'MediaChapter',
      statics: params.statics || {},
      methods: params.methods || {},
    });
    this.model = db.model<IMediaChapter>('MediaChapter', schema);
    Base.models.MediaChapter = this.model;
  }
}

export default MediaChapter;