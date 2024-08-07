import mongoose, { SchemaTypes } from 'mongoose'
import { v4 } from 'uuid';
import _ from 'lodash';

function getJsonSchema(schema) {
  const json = {
    type: 'object',
    properties: {},
  };
  const required = [];
  schema.eachPath((path, xchma) => {
    if (path === '_id') {
      return;
    }
    const type = xchma.options.type instanceof Schema ? 'object' : (typeof xchma.options.type === 'function' ? xchma.options.type.name.toLowerCase() : (_.isArray(xchma.options.type) ? 'array' : xchma.options.type));
    const o = {};
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
      o.items = xchma.schema ? getJsonSchema(xchma.schema) : xchma.options.type.map((t) => t.type ? t.type.name : t.name).map((t) => ({ type: t.toLowerCase() }));
    }
    json.properties[path] = o;
  });
  if (required.length !== 0) {
    json.required = required;
  }
  return json;
}

const Schema = mongoose.Schema;
const ResourceSchema = new Schema({
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
});

const json = getJsonSchema(ResourceSchema)
console.log(JSON.stringify(json, null, 0))
// ResourceSchema.eachPath((path, schema) => {
//   console.log(path, schema.options);
//   if (path === 'people') {
//     schema.schema.eachPath((path2, schema2) => {
//       console.log(path2, schema2.options)
//     })
//   }
// })