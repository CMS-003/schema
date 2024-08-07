import mongoose from "mongoose";
import { getMongoSchema, getJsonSchema } from "../dist/base.js";

const schema = new mongoose.Schema({
  _id: { type: String },
  project_id: { type: String },
  status: { type: Number },
  accepts: { type: [String] },
  order: { type: Number },
  resources: { type: [{ _id: false, resource_id: String, resource_type: String }] },
  attrs: { type: Object },
  updatedAt: { type: Date },
  roles: [{ _id: false, name: String, peoples: [{ _id: false, name: String, avatar: String }] }],
  user: {
    id: String,
    name: String,
  },
  counter: Map
});

const json = getJsonSchema(schema);
console.log(JSON.stringify(json));

const new_schema = getMongoSchema(json)
new_schema.eachPath((path, option) => {
  console.log(path, option.instance)
})
// console.log(new_schema);