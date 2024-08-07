import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { ISchedule } from '../../@types/manager.js'

class Schedule extends Base<ISchedule> {
  constructor(db: mongoose.Connection, params: CustomParams<ISchedule> = {}) {
    super();
    const schema = new mongoose.Schema({
      _id: {
        type: String,
      },
      cron: {
        type: String,
      },
      name: {
        type: String,
      },
      desc: {
        type: String,
        default: '',
      },
      status: {
        type: Number,
        default: 1,
      },
      script: {
        type: String
      },
      createdAt: {
        type: Date,
      },
    }, {
      strict: false,
      versionKey: false,
      excludeIndexes: true,
      collection: 'Schedule',
      methods: params.methods || {},
      statics: params.statics || {},
    });
    this.model = db.model<ISchedule>('Schedule', schema);
    Base.models.Schedule = this.model;
  }
}

export default Schedule;