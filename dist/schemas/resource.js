"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const base_js_1 = __importDefault(require("../base.js"));
const uuid_1 = require("uuid");
class Resource extends base_js_1.default {
    constructor(db) {
        super();
        const schema = new mongoose_1.default.Schema({
            id: {
                type: String,
                default: uuid_1.v4,
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
            _id: false,
            strict: false,
            excludeIndexes: true,
            timestamps: true,
            collection: 'resource'
        });
        this.model = db.model('Resource', schema);
        base_js_1.default.models.Resource = this.model;
    }
}
exports.default = Resource;
