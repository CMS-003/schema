"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
class Base {
    constructor() {
        this.model = null;
    }
    _init(opts) {
        const opt = {
            where: {},
            sort: {},
            attrs: {},
            lean: false,
            data: null,
            options: {},
        };
        opt.where = opts.where || {};
        opt.options = opts.options || {};
        // README: 特殊处理
        for (let key in opt.where) {
            if (lodash_1.default.isPlainObject(opt.where[key])) {
                for (let k2 in opt.where[key]) {
                    if (k2.startsWith('__')) {
                        let k = k2.replace('__', '$');
                        opt.where[key][k] = opt.where[key][k2];
                        delete opt.where[key][k2];
                    }
                }
            }
        }
        // 分页
        if (lodash_1.default.isInteger(opts.limit)) {
            opt.limit = opts.limit;
        }
        else {
            opt.limit = 20;
        }
        if (lodash_1.default.isInteger(opts.page)) {
            opt.offset = (opts.page - 1) * opt.limit;
        }
        else {
            opt.page = 1;
        }
        if (lodash_1.default.isInteger(opts.offset)) {
            opt.offset = opts.offset;
        }
        else {
            opt.offset = 0;
        }
        // 事物
        // 关联查询
        // 字段
        if (!lodash_1.default.isEmpty(opts.attrs)) {
            opt.attrs = opts.attrs;
        }
        // update的数据
        if (opts.data) {
            opt.data = opts.data;
        }
        // 排序
        if (opts.sort) {
            opt.sort = opts.sort;
        }
        // sum
        if (opts.sum) {
            opt.sum = opts.sum;
        }
        // lean
        if (opts.lean) {
            opt.lean = true;
        }
        return opt;
    }
    /**
     * aggregate聚合函数
     * @param {array} sql 数组
     */
    aggregate(query) {
        return this.model.aggregate(query);
    }
    getModel() {
        return this.model;
    }
    create(data) {
        return this.model.create(data);
    }
    destroy(opts) {
        const opt = this._init(opts);
        if (lodash_1.default.isEmpty(opt.where)) {
            opt.where['_id'] = '';
        }
        return this.model.deleteMany(opt.where);
    }
    update(opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const opt = this._init(opts);
            if (opt.data) {
                yield this.model.updateMany(opt.where, opt.data, opt.options);
            }
            return this.getInfo(opts);
        });
    }
    getAll(opts = {}) {
        const opt = this._init(opts);
        return this.model.find(opt.where).select(opt.attrs).sort(opt.sort).lean(opt.lean);
    }
    count(opts = {}) {
        const opt = this._init(opts);
        return this.model.countDocuments(opt.where);
    }
    sum(opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const opt = this._init(opts);
            const sum = yield this.model.aggregate([
                { $match: opt.where },
                { $group: { _id: null, count: { $sum: '$' + opt.sum } } }
            ]);
            return sum.length ? sum[0].count : 0;
        });
    }
    getList(opts = {}) {
        const opt = this._init(opts);
        return this.model.find(opt.where).select(opt.attrs).limit(opt.limit).skip(opt.offset).sort(opt.sort).lean(opt.lean);
    }
    getInfo(opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const opt = this._init(opts);
            const result = yield this.model.findOne(opt.where).select(opt.attrs).skip(opt.offset).sort(opt.sort).lean(opt.lean);
            return result;
        });
    }
    getAttributes() {
        const fields = this.model.schema.paths;
        const result = [];
        for (const field in fields) {
            console.log(`字段: ${field}, 类型: ${fields[field].instance}`);
            result.push({
                field,
                type: fields[field].instance
            });
        }
        return result;
    }
}
Base.models = {};
exports.default = Base;
