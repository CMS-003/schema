import mongoose from "mongoose";
import Base from '../../base.js';
import CONST from 'const';
class MediaALBUM extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            uid: { type: String, },
            mid: { type: String, },
            mtype: { type: String, },
            type: { type: Number, default: CONST.IMAGE.TYPE.ALBUM },
            title: { type: String },
            path: { type: String },
            url: { type: String },
            nth: { type: Number, default: 1 },
            status: { type: Number, default: CONST.STATUS.INITIAL },
            createdAt: { type: Date },
            updatedAt: { type: Date },
            more: { type: Object, default: {} },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'MediaALBUM',
            statics: params.statics || {},
            methods: params.methods || {},
        });
        this.model = db.model('MediaALBUM', schema);
        Base.models.MediaALBUM = this.model;
    }
}
export default MediaALBUM;
