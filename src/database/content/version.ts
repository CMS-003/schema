import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IVersion } from '../../@types/content.js'

class Version extends Base<IVersion> {
  constructor(db: mongoose.Connection, params: { methods?: { [key: string]: Function }, statics?: { [key: string]: (this: Model<IVersion>) => any } } = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: {
        type: String
      },
      app: {
        type: String,
      },
      name: {
        type: String,
      },
      desc: {
        type: String,
      },
      path: {
        type: String,
      },
      verson: {
        type: String,
      },
      status: {
        type: Number,
      },
      createdAt: {
        type: Date,
      },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'Version',
      statics: params.statics || {},
      methods: params.methods || {},
    });
    this.model = db.model<IVersion>('Version', schema);
    Base.models.Version = this.model;
  }
}

export default Version;