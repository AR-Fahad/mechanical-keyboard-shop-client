import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCart } from "../../../interfaces/cart.interface";

const initialState: TCart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ id: string; available: number }>
    ) => {
      const isExists = state.find(
        (product) => product.id === action.payload.id
      );
      if (isExists) {
        isExists.quantity++;
        isExists.remains--;
      } else {
        const newProduct = {
          id: action.payload.id,
          quantity: 1,
          remains: action.payload.available - 1,
        };
        state.push(newProduct);
      }
    },
    subtractFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const isExists = state.find(
        (product) => product.id === action.payload.id
      );
      if (isExists) {
        isExists.quantity--;
        isExists.remains++;
      }
    },
    getCart: (state) => {
      return state;
    },
  },
});

export const { addToCart, subtractFromCart, getCart } = cartSlice.actions;
