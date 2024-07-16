import mongoose from "mongoose";
import Base from '../../base.js'

export interface IWidget {
  _id: string;
  title: string;
  cover: string;
  desc: string;
  status: number;
  createdAt: Date;
  updatedAt: Date;
}

class Widget extends Base<IWidget> {
  constructor(db: mongoose.Connection) {
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
    this.model = db.model<IWidget>('widget_info', schema);
    Base.models.Widget = this.model;
  }
}

export default Widget;