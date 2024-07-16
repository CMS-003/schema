import mongoose from "mongoose";
import Base from '../../base.js';
export interface ISns {
    _id: string;
    user_id: string;
    sns_id: string;
    sns_type: string;
    nickname: string;
    avatar: string;
    createdAt: Date;
    updatedAt: Date;
    status: number;
    detail: object;
    access_token: string;
    access_expired_at: Date;
    refresh_token: string;
    refresh_expired_at: Date;
}
declare class Sns extends Base<ISns> {
    constructor(db: mongoose.Connection);
}
export default Sns;
