import { configureStore } from "@reduxjs/toolkit";
import audioSlice from "./slice/audioSlice";

export const store = configureStore({
  reducer: 
  audioSlice,
});