import mongoose, { SchemaTypes } from 'mongoose'
import { v4 } from 'uuid';
import _ from 'lodash';
import { getJsonSchema } from "../dist/base.js";

const Schema = mongoose.Schema;
const ResourceSchema = new Schema({
  _id: {
    type: String,
    default: v4,
    comment: '资源ID',
  },
  title: {
    type: String,
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
  setting: {
    type: SchemaTypes.Mixed,
    default: {},
  },
  counter: {
    type: Map,
    of: String,
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
  user: {
    _id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
  resource: [{
    _id: false,
    rid: {
      type: String,
      default: '',
    },
    rtype: {
      type: String,
      default: '',
    },
  }],
  source_id: {
    type: String,
    default: '',
  },
  updatedAt: {
    type: Date,
  }
});
console.log(ResourceSchema.obj)
const json = getJsonSchema(ResourceSchema)
console.log(JSON.stringify(json, null, 2))

ResourceSchema.eachPath((path, schema) => {
  // console.log(path, schema.options);
  if (path === 'original' || path === 'setting' || path === 'resource') {
    console.log(schema)
  }
  // if (path === 'original') {
  //   schema.schema.eachPath((path2, schema2) => {
  //     console.log(path2, schema2.options)
  //   })
  // }
})