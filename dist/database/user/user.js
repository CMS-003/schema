import mongoose from "mongoose";
import Base from '../../base.js';
class User extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            name: { type: String },
            nickname: { type: String },
            email: { type: String },
            phone: { type: String },
            avatar: { type: String },
            pass: { type: String },
            salt: { type: String },
            createdAt: { type: Date },
            updatedAt: { type: Date },
            status: { type: Number },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'User',
            statics: params.statics || {},
            methods: params.methods || {},
        });
        this.model = db.model('User', schema);
        Base.models.User = this.model;
    }
}
export default User;
