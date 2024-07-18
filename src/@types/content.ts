
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
  thumbnail: string;
  poster: string;
  alias: string[];
  content: string;
  tags: string[];
  uid: string;
  uname: string;
  status: number;
  original: object;
  origin: string;
  country: string;
  lang: string;
  cspn: string;
  spider_id: string;
  source_id: string;
  types: string[];
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
export interface IChapter {
  _id: string;
  resource_id: string;
  resource_type: string;
  // 小说分卷part; 视频分段section
  type: string;
  name: string;
  desc: string;
  order: number;
  createAt: Date;
  updatedAt: Date;
  extra?: object;
}
export interface BaseMedia {
  _id: string;
  resource_id: string;
  title: string;
  path: string;
  url: string;
  // video: 预告 trailer,花絮 tidbit,正片 normal
  // image: 封面 poster,缩略图 thumbnail,正文图片 content,图片列表 gallery
  // subtitle: vtt,srt,ass
  // lyrics
  type: string;
  // width,height,size,rotation,md5
  more: object;
  lang?: string;
  nth: number;
  // 1 初始化 2 下载中 3 已成功 4 已失败
  status: number;
  createdAt: Date;
}
export interface IMediaGallery extends BaseMedia {

}
export interface IMediaVideo extends BaseMedia {

}
export interface IMediaImage extends BaseMedia {

}
export interface IMediaPixiv extends BaseMedia {

}
export interface IMediaSubtitle extends BaseMedia {

}
export interface IMediaLyrics extends BaseMedia {

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