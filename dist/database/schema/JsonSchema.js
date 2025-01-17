import mongoose from "mongoose";
import Base from '../../base.js';
class JsonSchema extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            name: { type: String },
            title: { type: String },
            visible: { type: Number, default: 1 },
            db: { type: String },
            table: { type: String },
            status: { type: Number },
            schema: { type: Object },
            createdAt: { type: Date },
            updatedAt: { type: Date },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'JsonSchema',
            methods: params.methods || {},
            statics: params.statics || {},
        });
        this.model = db.model('JsonSchema', schema);
        Base.models.JsonSchema = this.model;
    }
}
export default JsonSchema;
