import mongoose, { Model } from "mongoose";
import { Base, IUser } from '../../@types/types'

class User extends Base<IUser> {
  constructor(db: mongoose.Connection, params: { methods?: { [key: string]: Function }, statics?: { [key: string]: (this: Model<IUser>) => any } } = {}) {
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
      collection: 'user_info',
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
      },
      statics: params.statics || {},
      methods: params.methods || {},
    });
    this.model = db.model<IUser>('user_info', schema);
    Base.models.User = this.model;
  }
}

export default User;