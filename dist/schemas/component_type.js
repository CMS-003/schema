import mongoose from "mongoose";
import Base from '../base.js';
class ComponentType extends Base {
    constructor(db) {
        super();
        const schema = new mongoose.Schema({
            id: { type: String },
            title: { type: String },
            name: { type: String },
            cover: { type: String },
            status: { type: Number },
            accepts: { type: [String] },
            order: { type: Number },
            createdAt: { type: Date },
            updatedAt: { type: Date },
        }, {
            _id: false,
            strict: false,
            excludeIndexes: true,
            collection: 'component_type_info'
        });
        this.model = db.model('component_type_info', schema);
        Base.models.ComponentType = this.model;
    }
}
export default ComponentType;
