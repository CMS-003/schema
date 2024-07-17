import mongoose from "mongoose";
import { Base } from '../../@types/types';
class Verification extends Base {
    constructor(db) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            method: { type: String },
            type: { type: Number },
            code: { type: String },
            content: { type: String },
            user_id: { type: String },
            receiver: { type: String },
            createdAt: { type: Date },
            expiredAt: { type: Date },
            status: { type: Number },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'verification',
            virtuals: {
                id: {
                    get() {
                        return this._id;
                    }
                }
            },
            toJSON: {
                transform(doc, rest) {
                    rest.id = rest._id;
                    delete rest._id;
                }
            }
        });
        this.model = db.model('verification', schema);
        Base.models.Verification = this.model;
    }
}
export default Verification;
