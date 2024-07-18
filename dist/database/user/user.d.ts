import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IUser } from '../../@types/user.js';
declare class User extends Base<IUser> {
    constructor(db: mongoose.Connection, params?: CustomParams<IUser>);
}
export default User;
