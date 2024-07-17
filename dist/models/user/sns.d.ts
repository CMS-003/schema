import mongoose from "mongoose";
import { Base, ISns } from '../../@types/types';
declare class Sns extends Base<ISns> {
    constructor(db: mongoose.Connection);
}
export default Sns;
