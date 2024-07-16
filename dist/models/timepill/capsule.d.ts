import mongoose from "mongoose";
import Base from '../../base.js';
export interface ICapsule {
    _id: string;
    name: string;
    receiver: string;
    content: string;
    createdAt: Date;
    expiredAt: Date;
}
declare class Capsule extends Base<ICapsule> {
    constructor(db: mongoose.Connection);
}
export default Capsule;
