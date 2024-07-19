import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { ITask } from '../../@types/crawler.js'

const Status = {
  INIT: 1,
  DOWNLOADING: 2,
  DOWNLOADED: 3,
  FAIL: 4,
  FINISHED: 5,
}
class Task extends Base<ITask> {
  constructor(db: mongoose.Connection, params: CustomParams<ITask> = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: {
        type: String,
      },
      name: {
        type: String,
      },
      type: {
        type: String,
        default: '',
      },
      proxy: {
        type: Boolean,
      },
      url: {
        type: String,
        default: '',
      },
      filepath: {
        type: String,
      },
      params: {
        type: Object,
        default: {},
      },
      header: {
        type: Object,
        default: {},
      },
      status: {
        type: Number,
        enum: Object.values(Status),
        default: 1,
      },
      transcode: {
        type: Number,
        default: 0,
      },
      retries: {
        type: Number,
        default: 0,
      },
      createdAt: {
        type: Date,
      },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'Task',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<ITask>('Task', schema);
    Base.models.Task = this.model;
  }
}

export default Task;