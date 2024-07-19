/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Model, UpdateQuery, UpdateWithAggregationPipeline } from 'mongoose';
type IJonSchema = {
    type?: string;
    format?: string;
    descrition?: string;
    enum?: any;
    comment?: string;
    default?: any;
    properties: {
        [key: string]: IJonSchema;
    };
    items?: IJonSchema[];
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
declare class Base<T> {
    static models: {
        [key: string]: Model<any>;
    };
    model: null | Model<T>;
    data: null | Partial<T>;
    constructor();
    _init(opts: OPT<T> | OPT): OPT<T>;
    aggregate(query: any): import("mongoose").Aggregate<any[]>;
    getModel(): Model<T, {}, {}, {}, import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>>, any>;
    create(data: Partial<T>): Promise<import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>>>;
    destroy(opts: OPT): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>>, {}, T, "deleteMany", {}>;
    update(opts?: OPT<T>): Promise<T & {
        [key: string]: Function;
    }>;
    getAll(opts?: OPT): Promise<T[]>;
    count(opts?: {}): Promise<Number>;
    sum(opts?: {}): Promise<Number>;
    getList(opts?: OPT): Promise<T[]>;
    getInfo(opts?: OPT): Promise<T & {
        [key: string]: Function;
    }>;
    getAttributes(): {
        field: string;
        type: string;
    }[];
    getJsonSchema(): IJonSchema;
}
export default Base;
