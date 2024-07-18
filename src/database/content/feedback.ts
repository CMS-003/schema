import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IFeedback } from '../../@types/content.js'

class Feedback extends Base<IFeedback> {
  constructor(db: mongoose.Connection, params: { methods?: { [key: string]: Function }, statics?: { [key: string]: (this: Model<IFeedback>) => any } } = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: {
        type: String,
      },
      resource_id: {
        type: String,
      },
      resource_title: {
        type: String,
        default: '',
      },
      content: {
        type: String,
      },
      comment: {
        type: String
      },
      user_id: {
        type: String
      },
      status: {
        type: Number,
        default: 1,
      },
      createdAt: {
        type: Date,
      },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'Feedback',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<IFeedback>('Feedback', schema);
    Base.models.Feedback = this.model;
  }
}

export default Feedback;