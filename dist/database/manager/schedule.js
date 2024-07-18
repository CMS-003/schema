import mongoose from "mongoose";
import Base from '#base';
class Schedule extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: {
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
        this.model = db.model('Schedule', schema);
        Base.models.Schedule = this.model;
    }
}
export default Schedule;
