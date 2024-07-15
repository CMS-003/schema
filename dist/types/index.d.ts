import mongoose, { Model, Schema, Document, FilterQuery, Query, mongo } from 'mongoose';

declare global {
  interface Window {
    console: Console;
  }
}
export interface IResource extends Document {
  id: string;
  title: string;
  desc: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICounter extends Document {
  resource_id: string;
  resource_type: string;
  [key: string]: number;
}

export interface IComponent extends Document {
  id: string;
  project_id: string;
  template_id: string;
  parent_id: string;
  tree_id: string;
  name: string;
  type: string;
  title: string;
  cover: string;
  status: number;
  accepts: string[];
  order: number;
  resources: { resource_id: string, resource_type: string }[];
  attrs: object;
  style: object;
  createdAt: Date;
  updatedAt: Date;
}

export interface IComponentType extends Document {
  id: string;
  title: string;
  cover: string;
  accepts: string[];
  order: number;
  status: number;
}

export interface IConfig extends Document {
  id: string;
  project_id: string;
  name: string;
  desc: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ILog extends Document {
  id: string;
  type: string;
  group: string;
  content: string;
  createdAt: string;
}

export interface IProject extends Document {
  id: string;
  title: string;
  cover: string;
  desc: string;
  status: number;
}

export interface ISns extends Document {
  id: string;
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

interface Field {
  widget: string;
  field: string;
  dataType: string;
  dataValue: mongoose.Schema.Types.Mixed
}

export interface ITemplate extends Document {
  id: string;
  project_id: string;
  title: string;
  name: string;
  desc: string;
  cover: string;
  type: string;
  path: string;
  attrs: object;
  style: object;
  createdAt: Date;
  updatedAt: Date;
  fields: Field[];
}

export interface IUser extends Document {
  id: string;
  nickname: string;
  avatar: string;
  pass: string;
  salt: string;
  createdAt: Date;
  updatedAt: Date;
  status: number;
}

export interface OPT<T> {
  sum?: string;
  where?: Query,
  sort?: { [key: string]: any } | string,
  attrs?: { [key: string]: number },
  lean?: boolean,
  data?: null | Partial<T>,
  options?: object,
  page?: number,
  offset?: number,
  limit?: number,
}

export interface BaseModel<T> {
  model: Model<T & { _id: string }>,
  _init: (opt: any) => OPT;
  query: (sql) => any;
  aggregate: (query: any) => any;
  getModel: () => Model<T>;
  destroy: (opt: OPT) => void;
  update: (opt: OPT) => void;
  getAll: (opt: OPT) => Model<T>[];
  count: (opt: OPT) => number;
  getList: (opt: OPT) => Partial<T>[];
  getInfo: (opt: OPT) => Partial<T>;
  create: (data: any) => Document;
}