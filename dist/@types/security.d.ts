export interface IAccount {
    _id: string;
    user_id: string;
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
    account_id: string;
    password: string;
    createdAt: Date;
}
