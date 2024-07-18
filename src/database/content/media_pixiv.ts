
import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IMediaPixiv } from '../../@types/content.js'

class MediaPixiv extends Base<IMediaPixiv> {
  constructor(db: mongoose.Connection, params: { methods?: { [key: string]: Function }, statics?: { [key: string]: (this: Model<IMediaPixiv>) => any } } = {}) {
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
      collection: 'MediaPixiv',
      statics: params.statics || {},
      methods: params.methods || {},
    });
    this.model = db.model<IMediaPixiv>('MediaPixiv', schema);
    Base.models.MediaPixiv = this.model;
  }
}

export default MediaPixiv;