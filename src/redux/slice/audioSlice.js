import { createSlice } from "@reduxjs/toolkit";

const audioSlice = createSlice({
  name: "audio",
  initialState: {
    activitySelected: {},
    isPlaying: false
  },
  reducers: {
    setActivitySelected: (state, action) => {
      state.activitySelected = action.payload;
    },
    setisPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setActivitySelected, setisPlaying } = audioSlice.actions;

export default audioSlice.reducer;