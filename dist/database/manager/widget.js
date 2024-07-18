import mongoose from "mongoose";
import Base from '#base';
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
            collection: 'widget_info',
            methods: params.methods || {},
            statics: params.statics || {},
        });
        this.model = db.model('widget_info', schema);
        Base.models.Widget = this.model;
    }
}
export default Widget;
