import mongoose, { Model } from "mongoose";
import Base from '../../base.js';
import { IVerification } from '../../@types/user.js';
declare class Verification extends Base<IVerification> {
    constructor(db: mongoose.Connection, params?: {
        methods?: {
            [key: string]: Function;
        };
        statics?: {
            [key: string]: (this: Model<IVerification>) => any;
        };
    });
}
export default Verification;
