import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./ordersSlice"
import menuReducer from "./menuSlice"
import userReducer from "./UserSlice"

export const store = configureStore({
  reducer: {
    user : userReducer,
    menuItems : menuReducer,
    orders : orderReducer
  }
})