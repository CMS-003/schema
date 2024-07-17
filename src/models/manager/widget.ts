import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IWidget } from '../../@types/types'

class Widget extends Base<IWidget> {
  constructor(db: mongoose.Connection, params: { methods?: { [key: string]: Function }, statics?: { [key: string]: (this: Model<IWidget>) => any } } = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      title: { type: String },
      cover: { type: String },
      desc: { type: String },
      status: { type: Number },
      createdAt: { type: Date },
      updatedAt: { type: Date },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'widget_info',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<IWidget>('widget_info', schema);
    Base.models.Widget = this.model;
  }
}

export default Widget;