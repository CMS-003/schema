import mongoose from "mongoose";
import Base from '../../base.js';
export interface IVerification {
    _id: string;
    method: string;
    type: number;
    code: string;
    content: string;
    user_id: string;
    receiver: string;
    createdAt: Date;
    expiredAt: Date;
    status: number;
}
declare class Verification extends Base<IVerification> {
    constructor(db: mongoose.Connection);
}
export default Verification;
