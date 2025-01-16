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
    uid: string;
    title: string;
    desc: string;
    thumbnail: string;
    poster: string;
    alias: string[];
    content: string;
    tags: string[];
    uname: string;
    status: number;
    original: object;
    origin: string;
    country: string;
    actors: {
        _id: string;
        name: string;
    }[];
    lang: string;
    cspn: string;
    spider_id: string;
    source_id: string;
    types: string[];
    publishedAt: Date;
    archivedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export interface BaseMedia {
    _id: string;
    uid: string;
    mid: string;
    mtype: string;
    title: string;
    path: string;
    url: string;
    type: number;
    more: object;
    lang?: string;
    nth: number;
    status: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface IMediaALBUM extends BaseMedia {
}
export interface IMediaVideo extends BaseMedia {
}
export interface IMediaImage extends BaseMedia {
}
export interface IMediaPixiv extends BaseMedia {
}
export interface IMediaChapter extends BaseMedia {
}
export interface IMediaSegment extends BaseMedia {
}
export interface IMediaCaption extends BaseMedia {
}
export interface IMediaMusic extends BaseMedia {
}
export interface IVersion {
    _id: string;
    app: string;
    desc: string;
    path: string;
    status: number;
    version: string;
    createdAt: Date;
}
