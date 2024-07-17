import mongoose from "mongoose";
import { Base, IComponent } from '../../@types/types';
declare class Component extends Base<IComponent> {
    constructor(db: mongoose.Connection);
}
export default Component;
