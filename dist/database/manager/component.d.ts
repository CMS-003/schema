import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IComponent } from '../../@types/manager.js';
declare class Component extends Base<IComponent> {
    constructor(db: mongoose.Connection, params?: CustomParams<IComponent>);
}
export default Component;
