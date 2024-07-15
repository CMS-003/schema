import { Model, Schema, Document, FilterQuery, Query } from 'mongoose';

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