import { IProductInCart } from './product.interface';

export interface ICart {
  id?: number;
  totalItems: number;
  totalPrice: number;
  products: IProductInCart[];
}
