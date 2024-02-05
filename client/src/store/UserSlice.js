import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user : {
    id : '',
    userName : 'timeless-cafe',
    name : 'Timeless Cafe',
    address : 'Sector 7, New Delhi',
    contactInfo : {
      phone : '7373737373',
      email : 'abc@mail.co'
    },
    additionalPercentGST : '8',
    preferences : {
      currency : 'Rs.',
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