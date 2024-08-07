import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { ITemplate } from '../../@types/manager.js'

class Template extends Base<ITemplate> {
  constructor(db: mongoose.Connection, params: CustomParams<ITemplate> = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      project_id: { type: String },
      name: { type: String },
      type: { type: String },
      title: { type: String },
      cover: { type: String },
      path: { type: String },
      desc: { type: String },
      status: { type: Number },
      order: { type: Number },
      attrs: { type: Object },
      style: { type: Object },
      fields: { type: [{ _id: false, widget: String, field: String, dataType: String, dataValue: mongoose.Schema.Types.Mixed }] },
      createdAt: { type: Date },
      updatedAt: { type: Date },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'Template',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<ITemplate>('Template', schema);
    Base.models.Template = this.model;
  }
}

export default Template;