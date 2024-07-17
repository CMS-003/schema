import mongoose from "mongoose";
import Base from '../../base.js';
class Component extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            project_id: { type: String },
            template_id: { type: String },
            parent_id: { type: String },
            tree_id: { type: String },
            name: { type: String },
            type: { type: String },
            title: { type: String },
            desc: { type: String },
            cover: { type: String },
            status: { type: Number },
            accepts: { type: [String] },
            order: { type: Number },
            resources: { type: [{ resource_id: String, resource_type: String }] },
            attrs: { type: Object },
            style: { type: Object },
            createdAt: { type: Date },
            updatedAt: { type: Date },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'component_info',
            methods: params.methods || {},
            statics: params.statics || {},
        });
        this.model = db.model('component_info', schema);
        Base.models.Component = this.model;
    }
}
export default Component;
