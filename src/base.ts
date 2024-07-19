import _ from 'lodash'
import { Model, UpdateQuery, UpdateWithAggregationPipeline, Schema } from 'mongoose';

type IJsonSchema = {
  type?: string;
  format?: string;
  descrition?: string;
  enum?: any;
  comment?: string;
  default?: any;
  properties: { [key: string]: IJsonSchema };
  items?: IJsonSchema[];
  required?: string[];
  oneOf?: { type: string }[];
}

function getJsonSchema(schema: Schema): IJsonSchema {
  const json: IJsonSchema = {
    type: 'object',
    properties: {},
  };
  const required: string[] = [];
  schema.eachPath((path, xchma) => {
    if (path === '_id') {
      return;
    }
    const type = xchma.options.type instanceof Schema ? 'object' : (typeof xchma.options.type === 'function' ? xchma.options.type.name.toLowerCase() : (_.isArray(xchma.options.type) ? 'array' : xchma.options.type));
    const o: any = {};
    o.type = type;
    if (_.get(xchma, 'options.required')) {
      required.push(path);
    }
    if (type === 'object' && xchma.schema) {
      json.properties[path] = getJsonSchema(xchma.schema);
    }
    if (!_.isNil(xchma.options.comment)) {
      o.comment = xchma.options.comment;
    }
    if (!_.isNil(xchma.options.enum)) {
      o.enum = xchma.options.enum;
    }
    if (!_.isFunction(xchma.options.default)) {
      o.default = xchma.options.default;
    }
    if (type === 'date') {
      o.type = 'string';
      o.format = 'date-time';
    }
    if (xchma.options.type.name === 'SchemaMixed') {
      delete o.type;
      o.oneOf = [
        { type: 'string' },
        { type: 'number' },
        { type: 'boolean' },
        { type: 'object' },
      ]
    }
    if (type === 'array') {
      o.items = xchma.schema ? getJsonSchema(xchma.schema) : xchma.options.type.map((t: any) => t.type ? t.type.name : t.name).map((t: any) => ({ type: t.toLowerCase() }));
    }
    json.properties[path] = o;
  });
  if (required.length !== 0) {
    json.required = required;
  }
  return json;
}

export interface OPT<T = void> {
  sum?: string;
  where?: any,
  sort?: { [key: string]: any } | string,
  attrs?: { [key: string]: number },
  lean?: boolean,
  data?: UpdateQuery<T> | UpdateWithAggregationPipeline,
  options?: object,
  page?: number,
  offset?: number,
  limit?: number,
}
export interface CustomParams<T> {
  methods?: {
    [key: string]: (this: T & { [key: string]: Function }, ...args: any[]) => any;
  };
  statics?: { [key: string]: (this: Model<T>) => any },
}
class Base<T> {
  static models: { [key: string]: Model<any> } = {};
  model: null | Model<T>;
  data: null | Partial<T>;

  constructor() {
    this.model = null;
  }

  _init(opts: OPT<T> | OPT) {
    const opt: OPT<T> = {
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
    } else {
      opt.limit = 20;
    }
    if (_.isInteger(opts.page)) {
      opt.offset = (opts.page - 1) * opt.limit;
    } else {
      opt.page = 1
    }
    if (_.isInteger(opts.offset)) {
      opt.offset = opts.offset;
    } else {
      opt.offset = 0
    }
    // 事物

    // 关联查询

    // 字段
    if (!_.isEmpty(opts.attrs)) {
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

  aggregate(query: any) {
    return this.model.aggregate(query);
  }

  getModel() {
    return this.model;
  }

  create(data: Partial<T>) {
    return this.model.create(data);
  }
  destroy(opts: OPT) {
    const opt = this._init(opts);
    if (_.isEmpty(opt.where)) {
      opt.where['_id'] = ''
    }
    return this.model.deleteMany(opt.where);
  }
  async update(opts: OPT<T> = {}) {
    const opt = this._init(opts);
    if (opt.data) {
      await this.model.updateMany(opt.where, opt.data, opt.options);
    }
    return this.getInfo(opts as OPT);
  }
  getAll(opts: OPT = {}): Promise<T[]> {
    const opt = this._init(opts);
    return this.model.find(opt.where).select(opt.attrs).sort(opt.sort).lean(opt.lean);
  }
  count(opts = {}): Promise<Number> {
    const opt = this._init(opts);
    return this.model.countDocuments(opt.where);
  }
  async sum(opts = {}): Promise<Number> {
    const opt = this._init(opts);
    const sum = await this.model.aggregate([
      { $match: opt.where },
      { $group: { _id: null, count: { $sum: '$' + opt.sum } } }]);
    return sum.length ? sum[0].count : 0;
  }
  getList(opts: OPT = {}): Promise<T[]> {
    const opt = this._init(opts);
    return this.model.find(opt.where).select(opt.attrs).limit(opt.limit).skip(opt.offset).sort(opt.sort).lean(opt.lean);
  }
  async getInfo(opts: OPT = {}) {
    const opt = this._init(opts);
    const result = await this.model.findOne(opt.where).select(opt.attrs).skip(opt.offset).sort(opt.sort).lean(opt.lean);
    return result as T & { [key: string]: Function };
  }
  getAttributes() {
    const fields = this.model.schema.paths;
    const result = [];
    for (const field in fields) {
      console.log(`字段: ${field}, 类型: ${fields[field].instance}`);
      result.push({
        field,
        type: fields[field].instance
      })
    }
    return result;
  }
  getJsonSchema() {
    const json = getJsonSchema(this.model.schema);
    return json;
  }
}

export default Base;