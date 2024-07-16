import mongoose from "mongoose";
import Base from '@/base.js'

interface Field {
  widget: string;
  field: string;
  dataType: string;
  dataValue: mongoose.Schema.Types.Mixed
}

interface ITemplate {
  _id: string;
  project_id: string;
  title: string;
  name: string;
  desc: string;
  cover: string;
  type: string;
  path: string;
  attrs: object;
  style: object;
  status: number;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  fields: Field[];
}

class Template extends Base<ITemplate> {
  constructor(db: mongoose.Connection) {
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
      collection: 'template_info',
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
    this.model = db.model<ITemplate>('template_info', schema);
    Base.models.Template = this.model;
  }
}

export default Template;