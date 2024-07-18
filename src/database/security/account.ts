import mongoose from "mongoose";
import Base, { CustomParams } from '#base';
import { IAccount } from '#@types/security.js'

class Account extends Base<IAccount> {
  constructor(db: mongoose.Connection, params: CustomParams<IAccount> = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      user_id: { type: String },
      name: { type: String },
      account: { type: String },
      email: { type: String },
      phone: { type: String },
      mark: { type: String },
      status: { type: Number },
      weight: { type: Number },
      createdAt: { type: Date },
      updateedAt: { type: Date },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'Account',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<IAccount>('Account', schema);
    Base.models.Account = this.model;
  }
}

export default Account;