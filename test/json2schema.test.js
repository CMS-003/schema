import mongoose from "mongoose";
import { getMongoSchema, getJsonSchema } from "../dist/base.js";

const json = {
  "type": "Object",
  "properties": {
    "_id": {
      "type": "String",
      "comment": "资源ID"
    },
    "title": {
      "type": "String"
    },
    "status": {
      "type": "Number",
      "default": 1
    },
    "publishedAt": {
      "type": "Date"
    },
    "original": {
      "type": "Object",
      "default": {}
    },
    "counter": {
      "type": "Map",
      "default": {}
    },
    "origin": {
      "type": "String",
      "default": ""
    },
    "country": {
      "type": "String",
      "default": "CN"
    },
    "user": {
      "type": "Object",
      "properties": {
        "_id": {
          "type": "String",
          "default": ""
        },
        "name": {
          "type": "String",
          "default": ""
        }
      }
    },
    "resource": {
      "type": "Array",
      "items": [
        {
          "type": "Object",
          "properties": {
            "rid": {
              "type": "String",
              "default": ""
            },
            "rtype": {
              "type": "String",
              "default": ""
            }
          }
        }
      ]
    },
    "source_id": {
      "type": "String",
      "default": ""
    },
    "updatedAt": {
      "type": "Date"
    }
  }
}

const new_schema = getMongoSchema(json)
new_schema.eachPath((path, option) => {
  console.log(path, option.instance)
})
console.log(new_schema.obj);
console.log(new_schema.obj.resource);