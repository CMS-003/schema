import mongoose from "mongoose";
import Base from '../../base.js';
export interface IComponentType {
    _id: string;
    title: string;
    name: string;
    cover: string;
    accepts: string[];
    order: number;
    status: number;
    createdAt: Date;
    updatedAt: Date;
}
declare class ComponentType extends Base<IComponentType> {
    constructor(db: mongoose.Connection);
}
export default ComponentType;
