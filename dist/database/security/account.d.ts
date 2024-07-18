import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IAccount } from '../../@types/security.js';
declare class Account extends Base<IAccount> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IAccount>) => any;
        };
    });
}
export default Account;
