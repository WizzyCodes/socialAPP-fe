/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.user = payload;
    },

    logoutUser: (state: any) => {
      state.user = {};
    },
  },
});

export const { logoutUser, loginUser } = authSlice.actions;

export default authSlice.reducer;
