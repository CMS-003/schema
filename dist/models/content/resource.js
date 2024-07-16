import mongoose from "mongoose";
import Base from '../../base.js';
import { v4 } from "uuid";
class Resource extends Base {
    constructor(db) {
        super();
        const schema = new mongoose.Schema({
            _id: {
                type: String,
                default: v4,
            },
            title: {
                type: String,
            },
            content: {
                type: String,
                default: '',
            },
            desc: {
                type: String,
                default: '',
            },
            tags: {
                type: [String],
                default: [],
            },
            uid: {
                type: String,
                default: '',
            },
            uname: {
                type: String,
                default: '',
            },
            status: {
                type: Number,
                default: 1,
            },
            publishedAt: {
                type: Date,
                default: Date.now,
            },
            original: {
                type: Object,
                default: {},
            },
            origin: {
                type: String,
                default: '',
            },
            country: {
                type: String,
                default: 'CN',
            },
            lang: {
                type: String,
                default: ''
            },
            cspn: {
                type: String,
                default: '',
            },
            spider_id: {
                type: String,
                default: '',
            },
            source_id: {
                type: String,
                default: '',
            },
            types: {
                type: [String],
                default: [],
            },
            poster: {
                type: String,
                default: '',
            },
            thumbnail: {
                type: String,
                default: '',
            },
            alias: {
                type: [String],
                default: [],
            },
            createdAt: {
                type: Date,
            },
            updatedAt: {
                type: Date,
            }
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'resource',
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
        this.model = db.model('resource', schema);
        Base.models.Resource = this.model;
    }
}
export default Resource;
