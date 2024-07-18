import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IUser } from '../../@types/user.js'

class User extends Base<IUser> {
  constructor(db: mongoose.Connection, params: CustomParams<IUser> = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      name: { type: String },
      nickname: { type: String },
      email: { type: String },
      phone: { type: String },
      avatar: { type: String },
      pass: { type: String },
      salt: { type: String },
      createdAt: { type: Date },
      updatedAt: { type: Date },
      status: { type: Number },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'User',
      statics: params.statics || {},
      methods: params.methods || {},
    });
    this.model = db.model<IUser>('User', schema);
    Base.models.User = this.model;
  }
}

export default User;