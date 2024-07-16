import mongoose from "mongoose";
import Base from '@/base.js'

interface ISns {
  _id: string;
  user_id: string;
  sns_id: string;
  sns_type: string;
  nickname: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  status: number;
  detail: object;
  access_token: string;
  access_expired_at: Date;
  refresh_token: string;
  refresh_expired_at: Date;
}

class Sns extends Base<ISns> {
  constructor(db: mongoose.Connection) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      user_id: { type: String },
      sns_id: { type: String },
      sns_type: { type: String },
      nickname: { type: String },
      avatar: { type: String },
      detail: { type: Object },
      status: { type: Number },
      createdAt: { type: Date },
      access_token: { type: Object },
      refresh_token: { type: Object },
      access_expired_at: { type: Date },
      refresh_expired_at: { type: Date },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'sns_info',
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
    this.model = db.model<ISns>('sns_info', schema);
    Base.models.Sns = this.model;
  }
}

export default Sns;