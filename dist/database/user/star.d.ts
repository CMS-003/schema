import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IStar } from '../../@types/user.js';
declare class Star extends Base<IStar> {
    constructor(db: mongoose.Connection, params?: CustomParams<IStar>);
}
export default Star;
