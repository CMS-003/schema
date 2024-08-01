import mongoose from "mongoose";
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
export interface IConfig {
    _id: string;
    project_id: string;
    name: string;
    desc: string;
    type: string;
    value: any;
    createdAt: Date;
    updatedAt: Date;
}
export interface ILog {
    _id: string;
    project_id: string;
    type: string;
    group: string;
    content: string;
    createdAt: Date;
}
export interface IProject {
    _id: string;
    title: string;
    cover: string;
    desc: string;
    status: number;
    createdAt: Date;
    updatedAt: Date;
}
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
    children?: IComponent[];
}
export interface IWidget {
    _id: string;
    title: string;
    cover: string;
    desc: string;
    status: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface ISchedule {
    _id: string;
    cron: string;
    name: string;
    desc: string;
    script: string;
    status: number;
    createdAt: Date;
}
export interface IInterface {
    _id: string;
    name: string;
    desc: string;
    script: string;
    status: number;
    createdAt: Date;
    updatedAt: Date;
}
interface IViewWidget {
    widget: string;
    field: string;
    source: 'url' | 'var';
    refer?: any;
    value: any;
    explain: string;
    template: string;
    style: object | null;
    onclick: string;
}
export interface IView {
    _id: string;
    name: string;
    type: string;
    table: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
    widgets: IViewWidget & {
        children?: IViewWidget[];
    }[];
}
export {};
