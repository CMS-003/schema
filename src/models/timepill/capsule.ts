import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { ICapsule } from '../../@types/types'

class Capsule extends Base<ICapsule> {
  constructor(db: mongoose.Connection, params: { methods?: { [key: string]: Function }, statics?: { [key: string]: (this: Model<ICapsule>) => any } } = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      name: { type: String },
      type: { type: String },
      avatar: { type: String },
      pass: { type: String },
      salt: { type: String },
      createdAt: { type: Date },
      updatedAt: { type: Date },
      status: { type: Number },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'capsule',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<ICapsule>('capsule', schema);
    Base.models.Capsule = this.model;
  }
}

export default Capsule;