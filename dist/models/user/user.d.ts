import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
export interface IUser {
    _id: string;
    name: string;
    nickname: string;
    email: string;
    phone: string;
    avatar: string;
    pass: string;
    salt: string;
    createdAt: Date;
    updatedAt: Date;
    status: number;
}
declare class User extends Base<IUser> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IUser>) => any;
        };
    });
}
export default User;
