import mongoose from "mongoose";
import Base from '@/base.js'

interface IVerification {
  _id: string;
  method: string;
  type: number;
  // 1 registry 2 login 3 update pass 4 forgot pass 5 logoff 6 bind
  code: string;
  content: string;
  user_id: string;
  receiver: string;
  createdAt: Date;
  expiredAt: Date;
  status: number;
}

class Verification extends Base<IVerification> {
  constructor(db: mongoose.Connection) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      method: { type: String },
      type: { type: Number },
      code: { type: String },
      content: { type: String },
      user_id: { type: String },
      receiver: { type: String },
      createdAt: { type: Date },
      expiredAt: { type: Date },
      status: { type: Number },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'verification',
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
    this.model = db.model<IVerification>('verification', schema);
    Base.models.Verification = this.model;
  }
}

export default Verification;