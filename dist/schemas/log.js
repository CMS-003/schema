import mongoose from "mongoose";
import Base from '../base.js';
class Log extends Base {
    constructor(db) {
        super();
        const schema = new mongoose.Schema({
            id: { type: String },
            project_id: { type: String },
            type: { type: String },
            group: { type: String },
            content: { type: String },
            createdAt: { type: Date },
        }, {
            _id: false,
            strict: false,
            collection: 'log_info'
        });
        this.model = db.model('log_info', schema);
        Base.models.Log = this.model;
    }
}
export default Log;
