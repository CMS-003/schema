import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IView } from '../../@types/manager.js'

class View extends Base<IView> {
  constructor(db: mongoose.Connection, params: CustomParams<IView> = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      name: { type: String },
      type: { type: String },
      order: { type: Number },
      widgets: {
        type: [{
          _id: false,
          id: String,
          field: String,
          value: mongoose.Schema.Types.Mixed,
          optionValue: mongoose.Schema.Types.Mixed
        }]
      },
      createdAt: { type: Date },
      updatedAt: { type: Date },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'View',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<IView>('View', schema);
    Base.models.View = this.model;
  }
}

export default View;