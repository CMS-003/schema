import mongoose from "mongoose";
import Base, { CustomParams } from '#base';
import { IConfig } from '#@types/manager';
declare class Config extends Base<IConfig> {
    constructor(db: mongoose.Connection, params?: CustomParams<IConfig>);
}
export default Config;
