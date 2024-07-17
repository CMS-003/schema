import mongoose from "mongoose";
import Base from '../../base.js';
import { IVerification } from '../../@types/types';
declare class Verification extends Base<IVerification> {
    constructor(db: mongoose.Connection);
}
export default Verification;
