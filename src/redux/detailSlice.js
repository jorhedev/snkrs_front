// detailSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = null; // El estado inicial puede ser nulo o un objeto vacío

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    setDetail: (state, action) => {
      return action.payload;
    },
  },
});

export const { setDetail } = detailSlice.actions;
export default detailSlice.reducer;
