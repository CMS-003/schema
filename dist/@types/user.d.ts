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
export interface IHistory {
    _id: string;
    user_id: string;
    resource_id: string;
    resource_type: string;
    media_id: string;
    media_type: string;
    device: number;
    ip: string;
    total: number;
    watched: number;
    createdAt: Date;
}
export interface IStar {
    _id: string;
    uid: string;
    resource_id: string;
    resource_type: string;
    title: string;
    cover: string;
    createdAt: Date;
}
export interface IVerification {
    _id: string;
    method: string;
    type: number;
    code: string;
    content: string;
    user_id: string;
    receiver: string;
    createdAt: Date;
    expiredAt: Date;
    status: number;
}