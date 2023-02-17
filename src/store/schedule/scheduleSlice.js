import { createSlice } from "@reduxjs/toolkit";

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState: {
    selectedDays: {},
    savedDays: {},
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
    onRemoveSavedDay: (state, { payload }) => {
      delete state.savedDays[payload];
    },
    onSaveSelectedDays: (state, { payload }) => {
      for (let key in state.selectedDays) {
        console.log(state.selectedDays[key]);
        //set new properties to days
        state.selectedDays[key].name = payload.name;
        state.selectedDays[key].color = payload.color;
        //insert into current saved days
        state.savedDays[state.selectedDays[key].id] = state.selectedDays[key];
      }
      //reset selected days
      state.selectedDays = {};
    },
  },
});
export const { onToggleSelectedDay, onRemoveSavedDay, onSaveSelectedDays } =
  scheduleSlice.actions;
