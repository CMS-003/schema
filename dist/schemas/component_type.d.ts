import mongoose from "mongoose";
import Base from '../base.js';
import { IComponentType } from "../types";
declare class ComponentType extends Base<IComponentType> {
    constructor(db: mongoose.Connection);
}
export default ComponentType;
