import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isAddSubjectModalOpen: false,
    isAddSubjectButtonVisible: false,
  },
  reducers: {
    onOpenAddSubjectModal: (state) => {
      state.isAddSubjectModalOpen = true;
    },
    onCloseAddSubjectModal: (state) => {
      state.isAddSubjectModalOpen = false;
    },
  },
});
export const { onOpenAddSubjectModal, onCloseAddSubjectModal } =
  uiSlice.actions;
