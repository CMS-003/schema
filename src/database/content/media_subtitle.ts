import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IMediaSubtitle } from '../../@types/content.js'

class MediaSubtitle extends Base<IMediaSubtitle> {
  constructor(db: mongoose.Connection, params: CustomParams<IMediaSubtitle> = {}) {
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
      collection: 'MediaSubtitle',
      statics: params.statics || {},
      methods: params.methods || {},
    });
    this.model = db.model<IMediaSubtitle>('MediaSubtitle', schema);
    Base.models.MediaSubtitle = this.model;
  }
}

export default MediaSubtitle;