import mongoose from "mongoose";
import Base from '../../base.js';
class Capsule extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            name: { type: String },
            type: { type: String },
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
            collection: 'Capsule',
            methods: params.methods || {},
            statics: params.statics || {},
        });
        this.model = db.model('Capsule', schema);
        Base.models.Capsule = this.model;
    }
}
export default Capsule;
