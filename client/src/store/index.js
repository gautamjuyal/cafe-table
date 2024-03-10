import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./ordersSlice"
import menuReducer from "./menuSlice"
import userReducer from "./UserSlice"
import authReducer from "./authSlice"

export const store = configureStore({
  reducer: {
    user : userReducer,
    menuItems : menuReducer,
    orders : orderReducer,
    auth : authReducer
  }
})