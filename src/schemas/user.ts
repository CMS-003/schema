import mongoose from "mongoose";
import Base from '../base.js'
import { IUser } from "../types";

class User extends Base<IUser> {
  constructor(db: mongoose.Connection) {
    super();
    const schema = new mongoose.Schema({
      id: { type: String },
      name: { type: String },
      type: { type: String },
      avatar: { type: String },
      pass: { type: String },
      salt: { type: String },
      createdAt: { type: Date },
      updatedAt: { type: Date },
      status: { type: Number },
    }, {
      _id: false,
      strict: false,
      excludeIndexes: true,
      collection: 'user_info'
    });
    this.model = db.model<IUser>('user_info', schema);
    Base.models.User = this.model;
  }
}

export default User;