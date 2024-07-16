import mongoose from "mongoose";
import Base from "../../base.js";
class Capsule extends Base {
  constructor(db) {
    super();
    var schema = new mongoose.Schema({
      _id: {
        type: String
      },
      name: {
        type: String
      },
      type: {
        type: String
      },
      avatar: {
        type: String
      },
      pass: {
        type: String
      },
      salt: {
        type: String
      },
      createdAt: {
        type: Date
      },
      updatedAt: {
        type: Date
      },
      status: {
        type: Number
      }
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'capsule',
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
    this.model = db.model('capsule', schema);
    Base.models.Capsule = this.model;
  }
}
export default Capsule;