import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { ISns } from '../../@types/user.js';
declare class Sns extends Base<ISns> {
    constructor(db: mongoose.Connection, params?: CustomParams<ISns>);
}
export default Sns;
