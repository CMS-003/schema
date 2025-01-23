import mongoose, { Model, UpdateQuery, UpdateWithAggregationPipeline, Schema } from 'mongoose';
type IJsonSchema = {
    type?: string;
    const?: any;
    format?: string;
    descrition?: string;
    enum?: any;
    comment?: string;
    default?: any;
    properties?: {
        [key: string]: IJsonSchema;
    };
    items?: IJsonSchema[];
    required?: string[];
    oneOf?: {
        type: string;
    }[];
};
export interface OPT<T = void> {
    sum?: string;
    where?: any;
    sort?: {
        [key: string]: any;
    } | string;
    attrs?: {
        [key: string]: number;
    };
    lean?: boolean;
    data?: UpdateQuery<T> | UpdateWithAggregationPipeline;
    options?: object;
    page?: number;
    offset?: number;
    limit?: number;
}
export interface CustomParams<T> {
    methods?: {
        [key: string]: (this: T & {
            [key: string]: Function;
        }, ...args: any[]) => any;
    };
    statics?: {
        [key: string]: (this: Model<T>) => any;
    };
}
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
    getJsonSchema(): IJsonSchema;
}
export declare function getJsonSchema(schema: Schema): IJsonSchema;
type IJson = {
    type?: 'Object' | 'Array' | 'Buffer' | 'Date' | 'Decimal128' | 'Map' | 'Mixed' | 'Number' | 'String' | 'ObjectId' | 'Boolean';
    const?: any;
    enum?: any;
    comment?: string;
    default?: any;
    properties?: {
        [key: string]: IJson;
    };
    items?: IJson[];
    required?: string[];
};
export declare function getMongoSchema(json: IJson, option?: mongoose.SchemaOptions): mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.SchemaOptions<unknown, {}, {}, {}, {}, mongoose.Document<unknown, {}, unknown> & Required<{
    _id: unknown;
}>>, any, mongoose.Document<unknown, {}, unknown> & Required<{
    _id: unknown;
}>>;
export default Base;
