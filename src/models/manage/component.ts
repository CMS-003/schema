import mongoose from "mongoose";
import Base from '@/base.js'

interface IComponent {
  _id: string;
  project_id: string;
  template_id: string;
  parent_id: string;
  tree_id: string;
  name: string;
  type: string;
  title: string;
  desc: string;
  cover: string;
  status: number;
  accepts: string[];
  order: number;
  resources: { resource_id: string, resource_type: string }[];
  attrs: object;
  style: object;
  createdAt: Date;
  updatedAt: Date;
}

class Component extends Base<IComponent> {
  constructor(db: mongoose.Connection) {
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
      collection: 'component_info',
      virtuals: {
        id: {
          get() {
            return this._id;
          }
        }
      },
      toJSON: {
        transform(doc, rest) {
          rest.id = rest._id;
          delete rest._id;
        }
      }
    });
    this.model = db.model<IComponent>('component_info', schema);
    Base.models.Component = this.model;
  }
}

export default Component;