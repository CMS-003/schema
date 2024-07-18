import mongoose from "mongoose";
import Base from '../../base.js';
class ComponentType extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            title: { type: String },
            name: { type: String },
            cover: { type: String },
            status: { type: Number },
            accepts: { type: [String] },
            order: { type: Number },
            createdAt: { type: Date },
            updatedAt: { type: Date },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'ComponentType',
            methods: params.methods || {},
            statics: params.statics || {},
        });
        this.model = db.model('ComponentType', schema);
        Base.models.ComponentType = this.model;
    }
}
export default ComponentType;
