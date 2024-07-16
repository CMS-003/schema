import mongoose from "mongoose";
import Base from '../../base.js';
export interface IComponent {
    _id: string;
    project_id: string;
    template_id: string;
    parent_id: string;
    tree_id: string;
    name: string;
    type: string;
    title: string;
    desc: string;
    cover: string;
    status: number;
    accepts: string[];
    order: number;
    resources: {
        resource_id: string;
        resource_type: string;
    }[];
    attrs: object;
    style: object;
    createdAt: Date;
    updatedAt: Date;
    children?: IComponent[];
}
declare class Component extends Base<IComponent> {
    constructor(db: mongoose.Connection);
}
export default Component;
