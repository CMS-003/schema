import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IJsonSchema } from '../../@types/schema.js';
declare class JsonSchema extends Base<IJsonSchema> {
    constructor(db: mongoose.Connection, params?: CustomParams<IJsonSchema>);
}
export default JsonSchema;
