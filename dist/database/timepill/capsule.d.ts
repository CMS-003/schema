import mongoose from "mongoose";
import Base, { CustomParams } from '#base';
import { ICapsule } from '#@types/timepill.js';
declare class Capsule extends Base<ICapsule> {
    constructor(db: mongoose.Connection, params?: CustomParams<ICapsule>);
}
export default Capsule;
