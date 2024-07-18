import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IStar } from '../../@types/user.js'

class Star extends Base<IStar> {
  constructor(db: mongoose.Connection, params: { methods?: { [key: string]: Function }, statics?: { [key: string]: (this: Model<IStar>) => any } } = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      uid: { type: String },
      title: { type: String },
      cover: { type: String },
      resource_id: { type: String },
      resource_type: { type: String },
      createdAt: { type: Date },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'Star',
      statics: params.statics || {},
      methods: params.methods || {},
    });
    this.model = db.model<IStar>('Star', schema);
    Base.models.Star = this.model;
  }
}

export default Star;