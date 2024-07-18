import mongoose from "mongoose";
import Base from '../../base.js';
class Account extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            user_id: { type: String },
            name: { type: String },
            account: { type: String },
            email: { type: String },
            phone: { type: String },
            mark: { type: String },
            status: { type: Number },
            weight: { type: Number },
            createdAt: { type: Date },
            updateedAt: { type: Date },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'Account',
            methods: params.methods || {},
            statics: params.statics || {},
        });
        this.model = db.model('Account', schema);
        Base.models.Account = this.model;
    }
}
export default Account;
