import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IComponentType } from '../../@types/manager.js'



class ComponentType extends Base<IComponentType> {
  constructor(db: mongoose.Connection, params: { methods?: { [key: string]: Function }, statics?: { [key: string]: (this: Model<IComponentType>) => any } } = {}) {
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
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<IComponentType>('component_type_info', schema);
    Base.models.ComponentType = this.model;
  }
}

export default ComponentType;