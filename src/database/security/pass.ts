import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IPass } from '../../@types/security.js'

class Pass extends Base<IPass> {
  constructor(db: mongoose.Connection, params: { methods?: { [key: string]: Function }, statics?: { [key: string]: (this: Model<IPass>) => any } } = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      aid: { type: String },
      password: { type: String },
      createdAt: { type: Date },
      updateedAt: { type: Date },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'Pass',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<IPass>('Pass', schema);
    Base.models.Pass = this.model;
  }
}

export default Pass;