export interface IJsonSchema {
    _id: string;
    name: string;
    title: string;
    db: string;
    visible: number;
    status: number;
    schema: object;
    createdAt: Date;
    updatedAt: Date;
}
export interface IConnection {
    _id: string;
    name: string;
    url: string;
    status: number;
    params: object;
    createdAt: Date;
    updatedAt: Date;
}
