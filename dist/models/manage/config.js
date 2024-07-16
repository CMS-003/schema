import mongoose from "mongoose";
import Base from "../../base.js";
class Config extends Base {
  constructor(db) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super();
    var schema = new mongoose.Schema({
      _id: {
        type: String
      },
      project_id: {
        type: String
      },
      type: {
        type: String
      },
      title: {
        type: String
      },
      desc: {
        type: String
      },
      order: {
        type: Number
      },
      value: {
        type: Object
      },
      createdAt: {
        type: Date
      },
      updatedAt: {
        type: Date
      }
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'config_info',
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
      methods: params.methods || {}
    });
    this.model = db.model('config_info', schema);
    Base.models.Config = this.model;
  }
}
export default Config;