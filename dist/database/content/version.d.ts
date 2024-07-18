import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IVersion } from '../../@types/content.js';
declare class Version extends Base<IVersion> {
    constructor(db: mongoose.Connection, params?: CustomParams<IVersion>);
}
export default Version;
