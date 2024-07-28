import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IInterface } from '../../@types/manager.js';
declare class Interface extends Base<IInterface> {
    constructor(db: mongoose.Connection, params?: CustomParams<IInterface>);
}
export default Interface;
