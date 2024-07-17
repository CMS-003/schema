import mongoose from "mongoose";
import { Base, IComponentType } from '../../@types/types';
declare class ComponentType extends Base<IComponentType> {
    constructor(db: mongoose.Connection);
}
export default ComponentType;
