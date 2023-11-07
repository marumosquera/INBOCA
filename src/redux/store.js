import { configureStore } from "@reduxjs/toolkit";
import audioSlice from "./slice/audioSlice";
import authSlice from "./slice/authSlice";

export const store = configureStore({
  reducer: 
 { audioSlice,authSlice},

});