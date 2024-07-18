export interface ICapsule {
    _id: string;
    name: string;
    receiver: string;
    content: string;
    createdAt: Date;
    expiredAt: Date;
}
