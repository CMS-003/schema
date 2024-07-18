import mongoose from "mongoose";
import Base from '../../base.js';
class Config extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            project_id: { type: String },
            type: { type: String },
            title: { type: String },
            desc: { type: String },
            order: { type: Number },
            value: { type: Object },
            createdAt: { type: Date },
            updatedAt: { type: Date },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'Config',
            statics: params.statics || {},
            methods: params.methods || {},
        });
        this.model = db.model('Config', schema);
        Base.models.Config = this.model;
    }
}
export default Config;
