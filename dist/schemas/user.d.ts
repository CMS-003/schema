import mongoose from "mongoose";
import Base from '../base.js';
import { IUser } from "../types";
declare class User extends Base<IUser> {
    constructor(db: mongoose.Connection);
}
export default User;
