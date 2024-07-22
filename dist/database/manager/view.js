import mongoose from "mongoose";
import Base from '../../base.js';
class View extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            name: { type: String },
            type: { type: String },
            order: { type: Number },
            widgets: {
                type: [{
                        _id: false,
                        id: String,
                        field: String,
                        value: mongoose.Schema.Types.Mixed,
                        optionValue: mongoose.Schema.Types.Mixed
                    }]
            },
            createdAt: { type: Date },
            updatedAt: { type: Date },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'View',
            methods: params.methods || {},
            statics: params.statics || {},
        });
        this.model = db.model('View', schema);
        Base.models.View = this.model;
    }
}
export default View;
