import _ from 'lodash';
import mongoose, { Schema } from 'mongoose';
export class Base {
    static models = {};
    model;
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
            aggregate: [],
        };
        opt.where = opts.where || {};
        opt.options = opts.options || {};
        // README: 特殊处理
        for (let key in opt.where) {
            if (_.isPlainObject(opt.where[key])) {
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
        if (_.isInteger(opts.limit)) {
            opt.limit = opts.limit;
        }
        else {
            opt.limit = 20;
        }
        if (_.isInteger(opts.page)) {
            opt.offset = (opts.page - 1) * opt.limit;
        }
        else {
            opt.page = 1;
            opt.offset = 0;
        }
        if (_.isInteger(opts.offset)) {
            opt.offset = opts.offset;
        }
        // 事物
        // 关联查询
        // 字段
        if (!_.isEmpty(opts.attrs)) {
            opt.attrs = opts.attrs;
        }
        if (opts.aggregate) {
            opt.aggregate = opts.aggregate;
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
        if (_.isEmpty(opt.where)) {
            opt.where['_id'] = '';
        }
        return this.model.deleteMany(opt.where);
    }
    async update(opts = {}) {
        const opt = this._init(opts);
        if (opt.data) {
            await this.model.updateMany(opt.where, opt.data, opt.options);
        }
        return this.getInfo(opts);
    }
    getAll(opts = {}) {
        const opt = this._init(opts);
        return this.model.find(opt.where).select(opt.attrs).sort(opt.sort).lean(opt.lean);
    }
    count(opts = {}) {
        const opt = this._init(opts);
        return this.model.countDocuments(opt.where);
    }
    async sum(opts = {}) {
        const opt = this._init(opts);
        const sum = await this.model.aggregate([
            { $match: opt.where },
            { $group: { _id: null, count: { $sum: '$' + opt.sum } } }
        ]);
        return sum.length ? sum[0].count : 0;
    }
    getList(opts = {}) {
        const opt = this._init(opts);
        const aggregate = !_.isEmpty(opt.aggregate) ? true : false;
        const arr = [
            { $match: opt.where },
            { $limit: opt.limit },
        ];
        if (!_.isEmpty(opt.attrs)) {
            arr.push({ $project: opt.attrs });
        }
        if (!_.isEmpty(opt.sort)) {
            arr.push({ $sort: opt.sort });
        }
        if (aggregate) {
            arr.push(...opt.aggregate);
        }
        return aggregate ? this.model.aggregate(arr) : this.model.find(opt.where).select(opt.attrs).limit(opt.limit).skip(opt.offset).sort(opt.sort).lean(opt.lean);
    }
    async getInfo(opts = {}) {
        const opt = this._init(opts);
        const result = await this.model.findOne(opt.where).select(opt.attrs).skip(opt.offset).sort(opt.sort).lean(opt.lean);
        return result;
    }
    getAttributes() {
        const fields = this.model.schema.paths;
        const result = [];
        for (const field in fields) {
            result.push({
                field,
                type: fields[field].instance
            });
        }
        return result;
    }
    getJsonSchema() {
        const json = getJsonSchema(this.model.schema);
        return json;
    }
}
const types = mongoose.Schema.Types;
const baseTypes = ['String', 'Boolean', 'Buffer', 'Date', 'Map', 'Decimal128', 'ObjectId', 'Number', 'Mixed'];
// 非正规的都要求改为 { type: xxx }
function json2schema(json, isSubSchema = false) {
    const schema = {};
    if (json.type === 'Array') {
        return json.items.map(item => item.type === 'Object' ? json2schema(item, true) : types[item.type]);
    }
    else if (json.type === 'Object') {
        if (_.isEmpty(json.properties)) {
            const subSchema = { type: 'Object' };
            if (!_.isUndefined(json.default)) {
                subSchema.default = json.default;
            }
            return subSchema;
        }
        for (let k in json.properties) {
            schema[k] = json2schema(json.properties[k]);
        }
        return schema;
    }
    else if (!_.isUndefined(json.const)) {
        return json.const;
    }
    else if (baseTypes.includes(json.type)) {
        return { ...json, type: types[json.type] };
    }
}
/**
 *  将JSONSchema定义的对象转为mongoose的Schema
 * @param json 符合JSONSchema的表定义
 * @param option mongoose.SchemaOptions
 * @returns
 */
export function getMongoSchema(json, option = {}) {
    const schema = json2schema(json);
    return new Schema(schema, option);
}
/**
 * 将mongoose的Schema转为符合JSONSchema的对象
 * @param schema mongoose的Schema
 * @returns
 */
export function getJsonSchema(schema) {
    const json = {
        type: 'Object',
        properties: {},
    };
    const required = [];
    // 禁用_id 会遍历不到
    if (schema.obj._id === false) {
        json.properties._id = { type: 'Boolean', const: false };
    }
    schema.eachPath((path, xchma) => {
        if (path.endsWith('.$*')) {
            return;
        }
        const type = xchma.options.type instanceof Schema ? 'Object' : (typeof xchma.options.type === 'function' ? xchma.options.type.name : (_.isArray(xchma.options.type) ? 'Array' : xchma.options.type));
        const o = {};
        o.type = _.upperFirst(type);
        if (_.get(xchma, 'options.required')) {
            required.push(path);
        }
        if (type === 'Object' && xchma.schema) {
            if (xchma.schema) {
                json.properties[path] = getJsonSchema(xchma.schema);
            }
            else if (xchma.options.type.name === 'Object') {
                o.type = 'Object';
            }
        }
        if (!_.isNil(xchma.options.comment)) {
            o.comment = xchma.options.comment;
        }
        if (!_.isNil(xchma.options.enum)) {
            o.enum = xchma.options.enum;
        }
        if (!_.isFunction(xchma.options.default) && !_.isUndefined(xchma.options.default)) {
            o.default = xchma.options.default;
        }
        if (type === 'Date') {
            o.type = 'Date';
        }
        if (xchma.options.type.name === 'SchemaMixed') {
            o.type = 'Mixed';
        }
        if (type === 'Array') {
            o.items = xchma.schema ? [getJsonSchema(xchma.schema)] : xchma.options.type.map((t) => t.type ? t.type.name : t.name).map((t) => ({ type: _.upperFirst(t) }));
        }
        if (path.includes('.')) {
            const [opath, oattr] = path.split('.');
            if (!json.properties[opath]) {
                json.properties[opath] = { type: 'Object', properties: {} };
            }
            json.properties[opath].properties[oattr] = o;
        }
        else {
            json.properties[path] = o;
        }
    });
    if (required.length !== 0) {
        json.required = required;
    }
    return json;
}
export class MConnection extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            name: { type: String },
            url: { type: String },
            status: { type: Number },
            params: { type: Object },
            createdAt: { type: Date },
            updatedAt: { type: Date },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'Connection',
            methods: params.methods || {},
            statics: params.statics || {},
        });
        this.model = db.model('Connection', schema);
        Base.models.Connection = this.model;
    }
}
export class MJsonSchema extends Base {
    constructor(db, params = {}) {
        super();
        const schema = new mongoose.Schema({
            _id: { type: String },
            name: { type: String },
            title: { type: String },
            db: { type: String },
            table: { type: String },
            status: { type: Number },
            schema: { type: Object },
            methods: {
                type: [{ name: String, group: Number, script: String, _id: false }], default: []
            },
            createdAt: { type: Date },
            updatedAt: { type: Date },
        }, {
            strict: false,
            versionKey: false,
            excludeIndexes: true,
            collection: 'JsonSchema',
            methods: params.methods || {},
            statics: params.statics || {},
        });
        this.model = db.model('JsonSchema', schema);
        Base.models.JsonSchema = this.model;
    }
}
