import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IJsonSchema } from '../../@types/schema.js'

class JsonSchema extends Base<IJsonSchema> {
  constructor(db: mongoose.Connection, params: CustomParams<IJsonSchema> = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      name: { type: String },
      title: { type: String },
      db: { type: String },
      table: { type: String },
      status: { type: Number },
      schema: { type: Object },
      methods: {
        type: [{ name: String, group: Number, script: String, _id: false }], default: []
      },
      createdAt: { type: Date },
      updatedAt: { type: Date },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'JsonSchema',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<IJsonSchema>('JsonSchema', schema);
    Base.models.JsonSchema = this.model;
  }
}

export default JsonSchema;