import mongoose from "mongoose";
import Base from '../base.js';
class Component extends Base {
    constructor(db) {
        super();
        const schema = new mongoose.Schema({
            id: { type: String },
            project_id: { type: String },
            template_id: { type: String },
            parent_id: { type: String },
            tree_id: { type: String },
            name: { type: String },
            type: { type: String },
            title: { type: String },
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
            _id: false,
            strict: false,
            excludeIndexes: true,
            collection: 'component_info'
        });
        this.model = db.model('component_info', schema);
        Base.models.Component = this.model;
    }
}
export default Component;
