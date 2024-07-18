export interface IAccount {
    _id: string;
    uid: string;
    name: string;
    account: string;
    email: string;
    phone: string;
    mark: string;
    weight: number;
    status: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface IPass {
    _id: string;
    aid: string;
    password: string;
    createdAt: Date;
}
