import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

const initialState = {
  record: [],
};

const recordSlice = createSlice({
  name: "record",
  initialState,

  reducers: {
    getRecord: (state, action) => {
      state.record = action.payload;
      console.log(action.payload);
    },
  },
});
export const fetchRecord = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/shopping?status=approved");
    console.log("response record",response);
    dispatch(getRecord(response));
  } catch (error) {
    console.log(error);
  }
};

export const { getRecord } = recordSlice.actions;
export default recordSlice.reducer;
