import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IConnection } from '../../@types/schema.js'

class Connection extends Base<IConnection> {
  constructor(db: mongoose.Connection, params: CustomParams<IConnection> = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      name: { type: String },
      url: { type: String },
      status: { type: Number },
      params: { type: Object },
      createdAt: { type: Date },
      updatedAt: { type: Date },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'Connection',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<IConnection>('Connection', schema);
    Base.models.Connection = this.model;
  }
}

export default Connection;