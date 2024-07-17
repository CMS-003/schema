import mongoose from "mongoose";
import { Base, ICapsule } from '../../@types/types';
declare class Capsule extends Base<ICapsule> {
    constructor(db: mongoose.Connection);
}
export default Capsule;
