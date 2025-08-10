import { Model, UpdateQuery, UpdateWithAggregationPipeline } from 'mongoose';
export type IJSONSchema = {
    type?: 'Object' | 'Array' | 'Buffer' | 'Date' | 'Decimal128' | 'Map' | 'Mixed' | 'Number' | 'String' | 'ObjectId' | 'Boolean';
    const?: any;
    format?: string;
    descrition?: string;
    enum?: any;
    comment?: string;
    default?: any;
    properties?: {
        [key: string]: IJSONSchema;
    };
    items?: IJSONSchema[];
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
    aggregate?: boolean;
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
export interface IJsonSchema {
    _id: string;
    name: string;
    title: string;
    db: string;
    table: string;
    status: number;
    schema: object;
    methods: {
        name: string;
        group: number;
        script: string;
    }[];
    createdAt: Date;
    updatedAt: Date;
}
export interface IConnection {
    _id: string;
    name: string;
    url: string;
    status: number;
    params: object;
    createdAt: Date;
    updatedAt: Date;
}
