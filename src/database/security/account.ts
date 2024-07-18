import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IAccount } from '../../@types/security.js'

class Account extends Base<IAccount> {
  constructor(db: mongoose.Connection, params: { methods?: { [key: string]: Function }, statics?: { [key: string]: (this: Model<IAccount>) => any } } = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: { type: String },
      uid: { type: String },
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