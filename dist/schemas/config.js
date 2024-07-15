import mongoose from "mongoose";
import Base from '../base.js';
class Config extends Base {
    constructor(db) {
        super();
        const schema = new mongoose.Schema({
            id: { type: String },
            project_id: { type: String },
            name: { type: String },
            type: { type: String },
            title: { type: String },
            desc: { type: String },
            order: { type: Number },
            value: { type: Object },
            createdAt: { type: Date },
            updatedAt: { type: Date },
        }, {
            _id: false,
            strict: false,
            excludeIndexes: true,
            collection: 'config_info'
        });
        this.model = db.model('config_info', schema);
        Base.models.Config = this.model;
    }
}
export default Config;
