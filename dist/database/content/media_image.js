import mongoose from "mongoose";
import Base from '#base';
class MediaImage extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: {
                type: String
            },
            resource_id: {
                type: String,
            },
            type: { type: String },
            title: { type: String },
            path: { type: String },
            url: { type: String },
            nth: { type: Number },
            status: { type: Number },
            createdAt: { type: Date },
            updatedAt: { type: Date },
            more: {
                type: Object,
            },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'MediaImage',
            statics: params.statics || {},
            methods: params.methods || {},
        });
        this.model = db.model('MediaImage', schema);
        Base.models.MediaImage = this.model;
    }
}
export default MediaImage;
