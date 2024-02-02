import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./ordersSlice"
import menuReducer from "./menuSlice"

export const store = configureStore({
  reducer: {
    menuItems : menuReducer,
    orders : orderReducer
  }
})