import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IView } from '../../@types/manager.js';
declare class View extends Base<IView> {
    constructor(db: mongoose.Connection, params?: CustomParams<IView>);
}
export default View;
