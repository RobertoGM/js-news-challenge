export interface NewsProvider {
  id: number;
  src_big: string;
  src_small: string;
  alt_text?: string;
}

export interface TrendFeed {
  _id: string;
  title: string;
  body: string;
  provider: string;
  image: string;
  url: string;
  createdAt: string;
}

export interface getTrends {
  trends: TrendFeed[];
}

export enum Trends {
  'elmundo',
  'elpais',
}
