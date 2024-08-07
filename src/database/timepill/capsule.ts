import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { ICapsule } from '../../@types/timepill.js'

class Capsule extends Base<ICapsule> {
  constructor(db: mongoose.Connection, params: CustomParams<ICapsule> = {}) {
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
      collection: 'Capsule',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<ICapsule>('Capsule', schema);
    Base.models.Capsule = this.model;
  }
}

export default Capsule;