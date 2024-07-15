import mongoose from "mongoose";
import Base from '../base.js';
class Project extends Base {
    constructor(db) {
        super();
        const schema = new mongoose.Schema({
            id: { type: String },
            title: { type: String },
            cover: { type: String },
            desc: { type: String },
            status: { type: Number },
            createdAt: { type: Date },
            updatedAt: { type: Date },
        }, {
            _id: false,
            strict: false,
            excludeIndexes: true,
            collection: 'project_info'
        });
        this.model = db.model('project_info', schema);
        Base.models.Project = this.model;
    }
}
export default Project;
