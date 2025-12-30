import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailModal: false,
};

const othersSlice = createSlice({
  name: "others",
  initialState,
  reducers: {
    setModalRdx: (state, action) => {
      state.detailModal = action.payload;
    },
  },
});

export const { setModalRdx } = othersSlice.actions;

export default othersSlice.reducer;
