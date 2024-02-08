import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user : {
    id : '',
    img : '',
    userName : 'timeless-cafe',
    name : 'Timeless Cafe',
    description: 'Some attractive description of the restaurant',
    address : 'Sector 7, New Delhi',
    contactInfo : {
      phone : '7373737373',
      email : 'abc@mail.co'
    },
    preferences : {
      currency : 'Rs.',
      additionalPercentGST : '8',
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


export default UserSlice.reducer;