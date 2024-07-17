import mongoose from "mongoose";
import Base from '../../base.js';
import { ISns } from '../../@types/types';
declare class Sns extends Base<ISns> {
    constructor(db: mongoose.Connection);
}
export default Sns;
