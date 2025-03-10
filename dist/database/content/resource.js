import mongoose from "mongoose";
import { v7 } from "uuid";
import Base from '../../base.js';
import CONST from 'const';
class Resource extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String, default: () => v7() },
            title: { type: String, default: '' },
            content: { type: String, default: '', },
            desc: { type: String, default: '', },
            tags: { type: [String], default: [], },
            uid: { type: String, default: '', },
            uname: { type: String, default: '', },
            status: { type: Number, default: CONST.STATUS.INITIAL, },
            actors: { type: [{ _id: String, name: String }], default: [] },
            publishedAt: { type: Date, default: Date.now, },
            country: { type: String, default: 'CN', },
            lang: { type: String, default: '' },
            cspn: { type: String, default: '', },
            types: { type: [String], default: [], },
            series: { type: String, default: '' },
            poster: { type: String, default: '', },
            thumbnail: { type: String, default: '', },
            alias: { type: [String], default: [], },
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now },
            archivedAt: { type: Date },
            size: { type: Number },
        }, {
            id: true,
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'Resource',
            methods: params.methods || {},
            statics: params.statics || {},
        });
        this.model = db.model('Resource', schema);
        Base.models.Resource = this.model;
    }
}
export default Resource;
