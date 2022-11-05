import { StaticImageData } from 'next/image';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  imageUrl: StaticImageData;
  description?: string;
  materials?: string[];
  producedIn?: string[];
  categories?: string[];
  sizeY: number;
  sizeX: number;
}

export interface IProductInCart {
  id: number;
  title: string;
  price: number;
  description?: string;
  imageUrl: StaticImageData;
  materials?: string[];
  producedIn?: string[];
  categories?: string[];
  sizeY: number;
  sizeX: number;
  quantity: number;
}
