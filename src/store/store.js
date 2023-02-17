import { configureStore } from "@reduxjs/toolkit";
import { scheduleSlice } from "./schedule/scheduleSlice";

export const store = configureStore({
  reducer: {
    schedule: scheduleSlice.reducer,
  },
});
