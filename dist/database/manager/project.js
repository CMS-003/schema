import mongoose from "mongoose";
import Base from '../../base.js';
class Project extends Base {
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
            collection: 'Project',
            methods: params.methods || {},
            statics: params.statics || {},
        });
        this.model = db.model('Project', schema);
        Base.models.Project = this.model;
    }
}
export default Project;
