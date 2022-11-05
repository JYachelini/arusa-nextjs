import { StaticImageData } from 'next/image';

export interface IArticle {
  id?: number;
  title?: string;
  description?: string;
  imageUrl?: StaticImageData;
}
