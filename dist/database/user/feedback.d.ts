import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IFeedback } from '../../@types/user.js';
declare class Feedback extends Base<IFeedback> {
    constructor(db: mongoose.Connection, params?: CustomParams<IFeedback>);
}
export default Feedback;
