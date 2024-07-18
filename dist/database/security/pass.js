import mongoose from "mongoose";
import Base from '../../base.js';
class Pass extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            aid: { type: String },
            password: { type: String },
            createdAt: { type: Date },
            updateedAt: { type: Date },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'Pass',
            methods: params.methods || {},
            statics: params.statics || {},
        });
        this.model = db.model('Pass', schema);
        Base.models.Pass = this.model;
    }
}
export default Pass;
