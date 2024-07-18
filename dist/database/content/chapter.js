import mongoose from "mongoose";
import Base from '../../base.js';
class Chapter extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: {
                type: String
            },
            resource_id: {
                type: String,
            },
            resource_type: {
                type: String,
            },
            type: { type: String },
            name: { type: String },
            desc: { type: String },
            order: { type: Number },
            createdAt: { type: Date },
            updatedAt: { type: Date },
            extra: {
                type: { startTime: Number, endTime: Number },
            },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'Chapter',
            statics: params.statics || {},
            methods: params.methods || {},
        });
        this.model = db.model('Chapter', schema);
        Base.models.Chapter = this.model;
    }
}
export default Chapter;
