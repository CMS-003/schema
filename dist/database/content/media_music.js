import mongoose from "mongoose";
import Base from '../../base.js';
import constant from "#constant.js";
class MediaMusic extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            uid: { type: String },
            mid: { type: String, },
            type: { type: Number, default: constant.TYPE.MUSIC.AUDIO },
            title: { type: String },
            path: { type: String },
            url: { type: String },
            nth: { type: Number, default: 1 },
            status: { type: Number },
            createdAt: { type: Date },
            updatedAt: { type: Date },
            more: { type: Object, },
        }, {
            id: true,
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'MediaMusic',
            statics: params.statics || {},
            methods: params.methods || {},
        });
        this.model = db.model('MediaMusic', schema);
        Base.models.MediaMusic = this.model;
    }
}
export default MediaMusic;
