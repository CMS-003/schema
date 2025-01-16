import mongoose from "mongoose";
import Base from '../../base.js';
import constant from "../../constant.js";
class MediaChapter extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            uid: { type: String },
            mid: { type: String, },
            mtype: { type: String, },
            title: { type: String, },
            content: { type: String, },
            url: { type: String, },
            path: { type: String, },
            type: { type: Number },
            status: { type: Number, default: constant.STATUS.INITIAL },
            nth: { type: Number, default: 1 },
            createdAt: { type: Date },
            updatedAt: { type: Date },
            more: { type: Object, default: {} },
        }, {
            id: true,
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'MediaChapter',
            statics: params.statics || {},
            methods: params.methods || {},
        });
        this.model = db.model('MediaChapter', schema);
        Base.models.MediaChapter = this.model;
    }
}
export default MediaChapter;
