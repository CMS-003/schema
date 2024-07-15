import mongoose from "mongoose";
import Base from '../base.js';
import { IComponent } from "../types";
declare class Component extends Base<IComponent> {
    constructor(db: mongoose.Connection);
}
export default Component;
