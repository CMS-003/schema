import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { ISns } from '../../@types/user.js'

class Sns extends Base<ISns> {
  constructor(db: mongoose.Connection, params: CustomParams<ISns> = {}) {
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
      collection: 'Sns',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<ISns>('Sns', schema);
    Base.models.Sns = this.model;
  }
}

export default Sns;