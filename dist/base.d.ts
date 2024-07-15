import { Model } from 'mongoose';
import { OPT } from './types';
declare class Base<T> {
    static models: {
        [key: string]: Model<any>;
    };
    model: null | Model<T>;
    data: null | Partial<T>;
    constructor();
    _init(opts: OPT<T>): OPT<T>;
    /**
     * aggregate聚合函数
     * @param {array} sql 数组
     */
    aggregate(query: any): import("mongoose").Aggregate<any[]>;
    getModel(): Model<T, {}, {}, {}, import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>>, any>;
    create(data: Partial<T>): Promise<import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>>>;
    destroy(opts: OPT<T>): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>>, {}, T, "deleteMany", {}>;
    update(opts?: {}): Promise<import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>> extends infer T_1 ? T_1 extends import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>> ? T_1 extends null ? import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>> extends infer T_2 ? T_2 extends import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>> ? T_2 extends any[] ? import("mongoose").Require_id<import("mongoose").FlattenMaps<T>>[] : import("mongoose").Require_id<import("mongoose").FlattenMaps<T>> : never : never : import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>> extends infer T_2 ? T_2 extends import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>> ? T_2 extends any[] ? import("mongoose").Require_id<import("mongoose").FlattenMaps<T>>[] : import("mongoose").Require_id<import("mongoose").FlattenMaps<T>> : never : never : never : never>;
    getAll(opts?: {}): import("mongoose").Query<import("mongoose").Require_id<import("mongoose").FlattenMaps<T>>[], import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>>, {}, T, "find", {}>;
    count(opts?: {}): import("mongoose").Query<number, import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>>, {}, T, "countDocuments", {}>;
    sum(opts?: {}): Promise<any>;
    getList(opts?: {}): import("mongoose").Query<import("mongoose").Require_id<import("mongoose").FlattenMaps<T>>[], import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>>, {}, T, "find", {}>;
    getInfo(opts?: {}): Promise<import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>> extends infer T_1 ? T_1 extends import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>> ? T_1 extends null ? import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>> extends infer T_2 ? T_2 extends import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>> ? T_2 extends any[] ? import("mongoose").Require_id<import("mongoose").FlattenMaps<T>>[] : import("mongoose").Require_id<import("mongoose").FlattenMaps<T>> : never : never : import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>> extends infer T_2 ? T_2 extends import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>> ? T_2 extends any[] ? import("mongoose").Require_id<import("mongoose").FlattenMaps<T>>[] : import("mongoose").Require_id<import("mongoose").FlattenMaps<T>> : never : never : never : never>;
    getAttributes(): {
        field: string;
        type: string;
    }[];
}
export default Base;
