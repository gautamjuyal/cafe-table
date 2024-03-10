import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loggedIn: false,
  userId : '',
}

const authSlice = createSlice({
  name : 'auth',
  initialState,
  reducers : {
    setAuthDetails : (state, action)=>{
      state.userId = action.payload.userId;
      state.loggedIn = true;
    }
  }
})

export const { setAuthDetails } = authSlice.actions;
export default authSlice.reducer;