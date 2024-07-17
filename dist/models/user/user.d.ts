import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IUser } from '../../@types/types';
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
