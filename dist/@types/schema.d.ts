export interface IJsonSchema {
    _id: string;
    name: string;
    title: string;
    db: string;
    table: string;
    status: number;
    schema: object;
    methods: {
        name: string;
        group: number;
        script: string;
    }[];
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
