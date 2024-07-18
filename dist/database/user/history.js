import mongoose from "mongoose";
import Base from '#base';
class History extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            user_id: { type: String },
            resource_id: { type: String },
            resource_type: { type: String },
            media_id: { type: String },
            media_type: { type: String },
            ip: { type: String },
            device: { type: Number },
            watched: { type: Number },
            total: { type: Number },
            createdAt: { type: Date },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'History',
            statics: params.statics || {},
            methods: params.methods || {},
        });
        this.model = db.model('History', schema);
        Base.models.History = this.model;
    }
}
export default History;
