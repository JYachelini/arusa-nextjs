export interface IFooter {
  copyright: string;
  header: IHeader[];
}

export interface IHeader {
  id: number;
  title: string;
  content: IContent[];
}

export interface IContent {
  id: number;
  text: string;
  href: string;
}
