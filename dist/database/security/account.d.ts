import mongoose from "mongoose";
import Base, { CustomParams } from '#base';
import { IAccount } from '#@types/security.js';
declare class Account extends Base<IAccount> {
    constructor(db: mongoose.Connection, params?: CustomParams<IAccount>);
}
export default Account;
