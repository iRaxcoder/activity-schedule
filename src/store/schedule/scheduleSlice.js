import { createSlice } from "@reduxjs/toolkit";

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState: {
    "Humanidades I": {
      days: { 0: [0, 5, 7], 1: [3, 4] },
    },
  },
  reducers: {
    addSubject: (state, { payload }) => {
      const { subject } = payload;
      delete payload.subject;
      state[subject].days = { payload };
    },
    deleteSubject: (state, { payload }) => {
      delete state[payload];
    },
  },
});
export const { addSubject, deleteSubject } = scheduleSlice.actions;
