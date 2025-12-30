import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./addToCartSlice";
import othersSlice from "./others";

export const store = configureStore({
  reducer: {
    addToCart: addToCartSlice,
    othersRdx: othersSlice,
  },
});
