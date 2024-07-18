import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IPass } from '../../@types/security.js';
declare class Pass extends Base<IPass> {
    constructor(db: mongoose.Connection, params?: CustomParams<IPass>);
}
export default Pass;
