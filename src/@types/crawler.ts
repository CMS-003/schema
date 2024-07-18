
export interface ISpider {
  _id: string;
  config: {
    proxy: number;
    from: string;
  };
  header: { [key: string]: string | number },
  name: string;
  desc: string;
  urls: { url: string; enabled: boolean }[];
  pattern: string;
  script: string;
  extra: string;
  status: number;
  createdAt: Date;
}

export interface ITask {
  _id: string;
  name: string;
  type: string;
  proxy: boolean;
  header: object;
  params: object;
  url: string;
  filepath: string;
  retries: number;
  status: number;
  transcode: number;
  createdAt: Date;
}
