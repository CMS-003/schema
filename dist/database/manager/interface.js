import mongoose from "mongoose";
import Base from '../../base.js';
class Interface extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: {
                type: String,
            },
            name: {
                type: String,
            },
            desc: {
                type: String,
                default: '',
            },
            status: {
                type: Number,
                default: 1,
            },
            script: {
                type: String
            },
            createdAt: {
                type: Date,
            },
            updatedAt: {
                type: Date,
            },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'Interface',
            methods: params.methods || {},
            statics: params.statics || {},
        });
        this.model = db.model('Interface', schema);
        Base.models.Interface = this.model;
    }
}
export default Interface;
