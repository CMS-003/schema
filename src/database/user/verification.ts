import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IVerification } from '../../@types/user.js'

// 1 registry 2 login 3 update pass 4 forgot pass 5 logoff 6 bind
enum Type {
  register = 1,
  login = 2,
  update_pass = 3,
  forgot_pass = 4,
  logoff = 5,
  bind = 6,
}

class Verification extends Base<IVerification> {
  constructor(db: mongoose.Connection, params: CustomParams<IVerification> = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      method: { type: String },
      type: { type: Number, enum: Type },
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
      collection: 'Verification',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<IVerification>('Verification', schema);
    Base.models.Verification = this.model;
  }
}

export default Verification;