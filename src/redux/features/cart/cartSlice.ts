import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCart } from "../../../interfaces/cart.interface";
import { toast } from "sonner";

const initialState: {
  cart: TCart[];
} = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        image: string;
        available: number;
        price: number;
      }>
    ) => {
      const isExists = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (isExists) {
        if (isExists.quantity >= isExists.available) {
          toast.error("Insufficient quantity");
        } else {
          isExists.quantity++;
          isExists.total = isExists.quantity * action.payload.price;
        }
      } else {
        const newProduct = {
          id: action.payload.id,
          name: action.payload.name,
          image: action.payload.image,
          quantity: 1,
          available: action.payload.available,
          price: action.payload.price,
          total: action.payload.price,
        };
        state.cart.push(newProduct);
      }
    },
    subtractFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const isExists = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (isExists && isExists.quantity > 1) {
        isExists.quantity--;
        isExists.total = isExists.price * isExists.quantity;
      } else {
        state.cart.map(
          (product, key) =>
            product.id === action.payload.id && state.cart.splice(key, 1)
        );
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.cart.map(
        (product, key) =>
          product.id === action.payload.id && state.cart.splice(key, 1)
      );
    },
    emptyCart: (state) => {
      state.cart.splice(0, state.cart.length);
    },
  },
});

export const { addToCart, subtractFromCart, removeFromCart, emptyCart } =
  cartSlice.actions;
