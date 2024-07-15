import mongoose from "mongoose";
import Base from '../base.js';
class User extends Base {
    constructor(db) {
        super();
        const schema = new mongoose.Schema({
            id: { type: String },
            name: { type: String },
            type: { type: String },
            avatar: { type: String },
            pass: { type: String },
            salt: { type: String },
            createdAt: { type: Date },
            updatedAt: { type: Date },
            status: { type: Number },
        }, {
            _id: false,
            strict: false,
            excludeIndexes: true,
            collection: 'user_info'
        });
        this.model = db.model('user_info', schema);
        Base.models.User = this.model;
    }
}
export default User;
