import mongoose, { Model, Schema } from 'mongoose';
import { IJsonSchema, OPT, CustomParams, IJSONSchema, IConnection } from './@types';
export declare class Base<T> {
    static models: {
        [key: string]: Model<any>;
    };
    model: null | Model<T>;
    constructor();
    _init(opts: OPT<T> | OPT): OPT<T>;
    aggregate(query: any): mongoose.Aggregate<any[]>;
    getModel(): mongoose.Model<T, {}, {}, {}, mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>>, any>;
    create(data: Partial<T>): Promise<mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>>>;
    destroy(opts: OPT): mongoose.Query<mongoose.mongo.DeleteResult, mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>>, {}, T, "deleteMany", {}>;
    update(opts?: OPT<T>): Promise<T & {
        [key: string]: Function;
    }>;
    getAll(opts?: OPT): Promise<T[]>;
    count(opts?: {}): Promise<number>;
    sum(opts?: {}): Promise<number>;
    getList(opts?: OPT): Promise<T[]>;
    getInfo(opts?: OPT): Promise<T & {
        [key: string]: Function;
    }>;
    getAttributes(): {
        field: string;
        type: string;
    }[];
    getJsonSchema(): IJSONSchema;
}
/**
 *  将JSONSchema定义的对象转为mongoose的Schema
 * @param json 符合JSONSchema的表定义
 * @param option mongoose.SchemaOptions
 * @returns
 */
export declare function getMongoSchema(json: IJSONSchema, option?: mongoose.SchemaOptions): mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.SchemaOptions<unknown, {}, {}, {}, {}, mongoose.Document<unknown, {}, unknown> & Required<{
    _id: unknown;
}>>, any, mongoose.Document<unknown, {}, unknown> & Required<{
    _id: unknown;
}>>;
/**
 * 将mongoose的Schema转为符合JSONSchema的对象
 * @param schema mongoose的Schema
 * @returns
 */
export declare function getJsonSchema(schema: Schema): IJSONSchema;
export declare class MConnection extends Base<IConnection> {
    constructor(db: mongoose.Connection, params?: CustomParams<IConnection>);
}
export declare class MJsonSchema extends Base<IJsonSchema> {
    constructor(db: mongoose.Connection, params?: CustomParams<IJsonSchema>);
}
