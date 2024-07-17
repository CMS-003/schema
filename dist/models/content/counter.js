import mongoose from "mongoose";
import Base from '../../base.js';
class Counter extends Base {
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
            views: {
                type: Number,
                default: 0,
            },
            comments: {
                type: Number,
                default: 0,
            },
            likes: {
                type: Number,
                default: 0,
            },
            shares: {
                type: Number,
                default: 0,
            },
            marks: {
                type: Number,
                default: 0,
            },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'counter_info',
            statics: params.statics || {},
            methods: params.methods || {},
        });
        this.model = db.model('counter_info', schema);
        Base.models.Counter = this.model;
    }
}
export default Counter;
