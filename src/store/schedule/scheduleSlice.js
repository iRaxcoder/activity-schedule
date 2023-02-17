import { createSlice } from "@reduxjs/toolkit";

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState: {
    selectedDays: {},
  },
  reducers: {
    onToggleSelectedDay: (state, { payload }) => {
      const { id } = payload;
      if (!state.selectedDays[id]) {
        state.selectedDays[id] = payload;
      } else {
        delete state.selectedDays[id];
      }
    },
  },
});
export const { onToggleSelectedDay } = scheduleSlice.actions;
