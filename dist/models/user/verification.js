import mongoose from "mongoose";
import Base from '../../base.js';
class Verification extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            method: { type: String },
            type: { type: Number },
            code: { type: String },
            content: { type: String },
            user_id: { type: String },
            receiver: { type: String },
            createdAt: { type: Date },
            expiredAt: { type: Date },
            status: { type: Number },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'verification',
            methods: params.methods || {},
            statics: params.statics || {},
        });
        this.model = db.model('verification', schema);
        Base.models.Verification = this.model;
    }
}
export default Verification;
