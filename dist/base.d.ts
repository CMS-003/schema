import mongoose, { Model } from 'mongoose';
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
    data?: Partial<T>;
    options?: object;
    page?: number;
    offset?: number;
    limit?: number;
}
declare class Base<T> {
    static models: {
        [key: string]: Model<any>;
    };
    model: null | Model<T>;
    data: null | Partial<T>;
    constructor();
    _init(opts: OPT<T> | OPT): OPT<T>;
    aggregate(query: any): mongoose.Aggregate<any[]>;
    getModel(): mongoose.Model<T, {}, {}, {}, mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>>, any>;
    create(data: Partial<T> & {
        id?: string;
        _id?: string;
    }): Promise<mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>>>;
    destroy(opts: OPT<T>): mongoose.Query<mongoose.mongo.DeleteResult, mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>>, {}, T, "deleteMany", {}>;
    update(opts?: OPT<T>): Promise<mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>> extends infer T_1 ? T_1 extends mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>> ? T_1 extends null ? mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>> extends infer T_2 ? T_2 extends mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>> ? T_2 extends any[] ? mongoose.Require_id<mongoose.FlattenMaps<T>>[] : mongoose.Require_id<mongoose.FlattenMaps<T>> : never : never : mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>> extends infer T_2 ? T_2 extends mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>> ? T_2 extends any[] ? mongoose.Require_id<mongoose.FlattenMaps<T>>[] : mongoose.Require_id<mongoose.FlattenMaps<T>> : never : never : never : never>;
    getAll(opts?: OPT): mongoose.Query<mongoose.Require_id<mongoose.FlattenMaps<T>>[], mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>>, {}, T, "find", {}>;
    count(opts?: {}): mongoose.Query<number, mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>>, {}, T, "countDocuments", {}>;
    sum(opts?: {}): Promise<any>;
    getList(opts?: OPT): mongoose.Query<mongoose.Require_id<mongoose.FlattenMaps<T>>[], mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>>, {}, T, "find", {}>;
    getInfo(opts?: OPT): Promise<mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>> extends infer T_1 ? T_1 extends mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>> ? T_1 extends null ? mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>> extends infer T_2 ? T_2 extends mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>> ? T_2 extends any[] ? mongoose.Require_id<mongoose.FlattenMaps<T>>[] : mongoose.Require_id<mongoose.FlattenMaps<T>> : never : never : mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>> extends infer T_2 ? T_2 extends mongoose.IfAny<T, any, mongoose.Document<unknown, {}, T> & mongoose.Require_id<T>> ? T_2 extends any[] ? mongoose.Require_id<mongoose.FlattenMaps<T>>[] : mongoose.Require_id<mongoose.FlattenMaps<T>> : never : never : never : never>;
    getAttributes(): {
        field: string;
        type: string;
    }[];
}
export default Base;
