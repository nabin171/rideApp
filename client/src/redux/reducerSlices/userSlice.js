import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: {},
  },
  reducers: {
    loginUser: (state, action) => {
     state.userDetails =  action.payload
    },
    logoutUser: (state) => {
    state.userDetails = {}
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
