import { configureStore } from "@reduxjs/toolkit";
import { scheduleSlice } from "./schedule/scheduleSlice";
import { uiSlice } from "./ui/uiSlice";

export const store = configureStore({
  reducer: {
    schedule: scheduleSlice.reducer,
    ui: uiSlice.reducer,
  },
});
