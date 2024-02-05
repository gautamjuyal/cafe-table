import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  menuItems : [{id: 1, name : 'Coffee', category: 'BEVERAGE', price: {currency : 'Rs.', amount : 20}, img : '/coffee.jpg'}, {id: 2, name : 'Black Tea', category: 'BEVERAGE',  price: {currency : 'Rs.', amount : 15}, img : '/coffee.jpg'}, {id: 3, name : 'Green Tea', category: 'BEVERAGE', price: {currency : 'Rs.', amount : 30}, img : '/coffee.jpg'}, {id: 4, name : 'Adrak Tea', category: 'BEVERAGE', price: {currency : 'Rs.', amount : 40}, img : '/coffee.jpg'}, {id: 5, name : 'Cold Coffee', category: 'BEVERAGE', price: {currency : 'Rs.', amount : 50}, img : '/coffee.jpg'}]
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers : {
    addMenuItem : (state, action) =>{
      state.menuItems.push(action.payload)
    },
    removeMenuItem : (state, action)=>{
      state.menuItems = state.menuItems.filter(item => item.id != action.payload)
    }
  }
})

export const {addMenuItem, removeMenuItem} = menuSlice.actions
export default menuSlice.reducer