import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  // orders : [{orderId : 1, date: '8 jan 2024', time: '4:41',}, {orderId : 2, date: '8 jan 2024', time: '4:41'}, {orderId : 3, date: '8 jan 2024', time: '4:41'}, {orderId : 4, date: '8 jan 2024', time: '4:41'},{orderId : 5, date: '8 jan 2024', time: '4:41'}, {orderId : 6, date: '8 jan 2024', time: '4:41'}]
  orders : []
}

export const ordersSlice = createSlice({
  name : "orders",
  initialState,
  reducers : {
    createOrder : (state, action)=>{
      action.payload.id = nanoid()
      state.orders.push(action.payload)
    }, 
    removeOrder : (state, action)=>{
      state.orders = state.orders.filter(order => order.id != action.payload)
    }
  }
})

export const { createOrder, removeOrder } = ordersSlice.actions
export default ordersSlice.reducer