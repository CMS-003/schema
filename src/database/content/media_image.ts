import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IMediaImage } from '../../@types/content.js'

class MediaImage extends Base<IMediaImage> {
  constructor(db: mongoose.Connection, params: CustomParams<IMediaImage> = {}) {
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
      collection: 'MediaImage',
      statics: params.statics || {},
      methods: params.methods || {},
    });
    this.model = db.model<IMediaImage>('MediaImage', schema);
    Base.models.MediaImage = this.model;
  }
}

export default MediaImage;