import { createSlice } from "@reduxjs/toolkit";

const audioSlice = createSlice({
  name: "audio",
  initialState: {
    activitySelected: {},
  },
  reducers: {
    setActivitySelected: (state, action) => {
      state.activitySelected = action.payload;
    },
  },
});

export const { setActivitySelected } = audioSlice.actions;

export default audioSlice.reducer;