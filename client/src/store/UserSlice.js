import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user : {
    id : '',
    img : '',
    userName : '',
    name : '',
    description: '',
    address : '',
    contactInfo : {
      phone : '',
      email : ''
    },
    preferences : {
      currency : 'Rs.',
      additionalPercentGST : '',
      includeGSTInPrice : false,
    }
  }
}

const UserSlice = createSlice({
  name : 'user',
  initialState,
  reducers : {
  }
})

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;