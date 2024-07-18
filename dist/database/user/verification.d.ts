import mongoose from "mongoose";
import Base, { CustomParams } from '#base';
import { IVerification } from '#@types/user.js';
declare class Verification extends Base<IVerification> {
    constructor(db: mongoose.Connection, params?: CustomParams<IVerification>);
}
export default Verification;
