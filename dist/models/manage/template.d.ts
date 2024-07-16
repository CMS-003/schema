import mongoose from "mongoose";
import Base from '../../base.js';
export interface Field {
    widget: string;
    field: string;
    dataType: string;
    dataValue: mongoose.Schema.Types.Mixed;
}
export interface ITemplate {
    _id: string;
    project_id: string;
    title: string;
    name: string;
    desc: string;
    cover: string;
    type: string;
    path: string;
    attrs: object;
    style: object;
    status: number;
    order: number;
    createdAt: Date;
    updatedAt: Date;
    fields: Field[];
}
declare class Template extends Base<ITemplate> {
    constructor(db: mongoose.Connection);
}
export default Template;
