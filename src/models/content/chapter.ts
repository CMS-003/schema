

interface IChapter {
  _id: string;
  resource_id: string;
  resource_type: string;
  name: string;
  desc: string;
  order: number;
  createAt: Date;
  updatedAt: Date;
  startTime: number;
  endTime: number;
}