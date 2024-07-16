import mongoose from "mongoose";
import Base from '@/base.js'

interface IComponentType {
  _id: string;
  title: string;
  cover: string;
  accepts: string[];
  order: number;
  status: number;
}

class ComponentType extends Base<IComponentType> {
  constructor(db: mongoose.Connection) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      title: { type: String },
      name: { type: String },
      cover: { type: String },
      status: { type: Number },
      accepts: { type: [String] },
      order: { type: Number },
      createdAt: { type: Date },
      updatedAt: { type: Date },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'component_type_info',
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
    this.model = db.model<IComponentType>('component_type_info', schema);
    Base.models.ComponentType = this.model;
  }
}

export default ComponentType;