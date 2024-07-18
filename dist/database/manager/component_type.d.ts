import mongoose from "mongoose";
import Base, { CustomParams } from '../../base.js';
import { IComponentType } from '../../@types/manager.js';
declare class ComponentType extends Base<IComponentType> {
    constructor(db: mongoose.Connection, params?: CustomParams<IComponentType>);
}
export default ComponentType;
