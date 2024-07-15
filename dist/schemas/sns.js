import mongoose from "mongoose";
import Base from '../base.js';
class Sns extends Base {
    constructor(db) {
        super();
        const schema = new mongoose.Schema({
            user_id: { type: String },
            sns_id: { type: String },
            sns_type: { type: String },
            nickname: { type: String },
            avatar: { type: String },
            detail: { type: Object },
            status: { type: Number },
            createdAt: { type: Date },
            access_token: { type: Object },
            refresh_token: { type: Object },
            access_expired_at: { type: Date },
            refresh_expired_at: { type: Date },
        }, {
            _id: false,
            strict: false,
            excludeIndexes: true,
            collection: 'sns_info'
        });
        this.model = db.model('sns_info', schema);
        Base.models.Sns = this.model;
    }
}
export default Sns;
