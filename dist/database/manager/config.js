import mongoose from "mongoose";
import Base from '#base';
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
            collection: 'config_info',
            statics: params.statics || {},
            methods: params.methods || {},
        });
        this.model = db.model('config_info', schema);
        Base.models.Config = this.model;
    }
}
export default Config;
