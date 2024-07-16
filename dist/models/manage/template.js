import mongoose from "mongoose";
import Base from "../../base.js";
class Template extends Base {
  constructor(db) {
    super();
    var schema = new mongoose.Schema({
      _id: {
        type: String
      },
      project_id: {
        type: String
      },
      name: {
        type: String
      },
      type: {
        type: String
      },
      title: {
        type: String
      },
      cover: {
        type: String
      },
      path: {
        type: String
      },
      desc: {
        type: String
      },
      order: {
        type: Number
      },
      attrs: {
        type: Object
      },
      style: {
        type: Object
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
      collection: 'template_info',
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
    this.model = db.model('template_info', schema);
    Base.models.Template = this.model;
  }
}
export default Template;