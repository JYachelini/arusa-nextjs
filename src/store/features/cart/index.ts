import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ICart } from '../../../interfaces/cart.interface';
import { IProduct } from '../../../interfaces/product.interface';

const initialState: ICart = {
  totalItems: 0,
  totalPrice: 0,
  products: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      const itemInCart = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart != null) {
        itemInCart.quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      getTotal();
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item != null) {
        item.quantity++;
      }
      getTotal();
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item != null)
        if (item.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      getTotal();
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item != null) {
        const removeItem = state.products.filter(
          (item) => item.id !== action.payload
        );
        state.products = removeItem;
      }
      getTotal();
    },
    getTotal: (state) => {
      state.products.forEach((item) => {
        state.totalItems += item.quantity;
        state.totalPrice += item.price * item.quantity;
      });
    }
  }
});

export const {
  addProduct,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  getTotal
} = cartSlice.actions;

export default cartSlice.reducer;
