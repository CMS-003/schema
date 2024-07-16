import mongoose from "mongoose";
import Base from "../../base.js";
var Status = /*#__PURE__*/function (Status) {
  Status[Status["INIT"] = 1] = "INIT";
  Status[Status["DOWNLOADING"] = 2] = "DOWNLOADING";
  Status[Status["DOWNLOADED"] = 3] = "DOWNLOADED";
  Status[Status["FAIL"] = 4] = "FAIL";
  Status[Status["FINISHED"] = 5] = "FINISHED";
  return Status;
}(Status || {});
class Task extends Base {
  constructor(db) {
    super();
    const schema = new mongoose.Schema({
      _id: {
        type: String
      },
      name: {
        type: String
      },
      type: {
        type: String,
        default: ''
      },
      proxy: {
        type: Boolean
      },
      url: {
        type: String,
        default: ''
      },
      filepath: {
        type: String
      },
      params: {
        type: Object,
        default: {}
      },
      header: {
        type: Object,
        default: {}
      },
      status: {
        type: Status,
        default: 1
      },
      transcode: {
        type: Number,
        default: 0
      },
      retries: {
        type: Number,
        default: 0
      },
      createdAt: {
        type: Date
      }
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'task',
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
    this.model = db.model('task', schema);
    Base.models.Task = this.model;
  }
}
export default Task;