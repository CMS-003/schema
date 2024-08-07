import mongoose from "mongoose";
import Base from '../../base.js';
class Widget extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            title: { type: String },
            cover: { type: String },
            desc: { type: String },
            status: { type: Number },
            createdAt: { type: Date },
            updatedAt: { type: Date },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'Widget',
            methods: params.methods || {},
            statics: params.statics || {},
        });
        this.model = db.model('Widget', schema);
        Base.models.Widget = this.model;
    }
}
export default Widget;
