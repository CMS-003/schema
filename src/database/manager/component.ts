import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IComponent } from '../../@types/manager.js'

class Component extends Base<IComponent> {
  constructor(db: mongoose.Connection, params: CustomParams<IComponent> = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      project_id: { type: String },
      template_id: { type: String },
      parent_id: { type: String },
      tree_id: { type: String },
      name: { type: String },
      type: { type: String },
      title: { type: String },
      desc: { type: String },
      cover: { type: String },
      status: { type: Number },
      accepts: { type: [String] },
      order: { type: Number },
      resources: { type: [{ resource_id: String, resource_type: String }] },
      attrs: { type: Object },
      style: { type: Object },
      createdAt: { type: Date },
      updatedAt: { type: Date },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'Component',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<IComponent>('Component', schema);
    Base.models.Component = this.model;
  }
}

export default Component;