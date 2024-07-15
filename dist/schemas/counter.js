"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const base_js_1 = __importDefault(require("../base.js"));
class Counter extends base_js_1.default {
    constructor(db) {
        super();
        const schema = new mongoose_1.default.Schema({
            resource_id: {
                type: String,
            },
            resource_type: {
                type: String,
            },
            views: {
                type: Number,
                default: 0,
            },
            comments: {
                type: Number,
                default: 0,
            },
            likes: {
                type: Number,
                default: 0,
            },
            shares: {
                type: Number,
                default: 0,
            },
            marks: {
                type: Number,
                default: 0,
            },
        }, {
            _id: false,
            strict: false,
            excludeIndexes: true,
            timestamps: true,
            collection: 'counter'
        });
        this.model = db.model('Counter', schema);
        base_js_1.default.models.Counter = this.model;
    }
}
exports.default = Counter;
