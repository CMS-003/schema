import mongoose from "mongoose";
import Base, { OPT } from "../base";


export interface ICounter {
  _id: string;
  resource_id: string;
  resource_type: string;
  views: number;
  comments: number;
  likes: number;
  shares: number;
  marks: number;
}
export interface IResource {
  _id: string;
  title: string;
  desc: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface ITask {
  _id: string;
  name: string;
  type: string;
  proxy: boolean;
  header: object;
  params: object;
  url: string;
  filepath: string;
  retries: number;
  status: number;
  transcode: number;
  createdAt: Date;
}
export interface ICapsule {
  _id: string;
  name: string;
  receiver: string;
  content: string;
  createdAt: Date;
  expiredAt: Date;
}
export interface ISns {
  _id: string;
  user_id: string;
  sns_id: string;
  sns_type: string;
  nickname: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  status: number;
  detail: object;
  access_token: string;
  access_expired_at: Date;
  refresh_token: string;
  refresh_expired_at: Date;
}
export interface IUser {
  _id: string;
  name: string;
  nickname: string;
  email: string;
  phone: string;
  avatar: string;
  pass: string;
  salt: string;
  createdAt: Date;
  updatedAt: Date;
  status: number;
}
export interface IVerification {
  _id: string;
  method: string;
  type: number;
  // 1 registry 2 login 3 update pass 4 forgot pass 5 logoff 6 bind
  code: string;
  content: string;
  user_id: string;
  receiver: string;
  createdAt: Date;
  expiredAt: Date;
  status: number;
}
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
  resources: { resource_id: string, resource_type: string }[];
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
  type: string;
  group: string;
  content: string;
  createdAt: string;
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
  dataValue: mongoose.Schema.Types.Mixed
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
export interface IWidget {
  _id: string;
  title: string;
  cover: string;
  desc: string;
  status: number;
  createdAt: Date;
  updatedAt: Date;
}

export {
  Base,
  OPT,
}