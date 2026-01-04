import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailModal: false,
  brochureModal: false,
};

const othersSlice = createSlice({
  name: "others",
  initialState,
  reducers: {
    setModalRdx: (state, action) => {
      state.detailModal = action.payload;
    },
    setBrochureModalRdx: (state, action) => {
      state.brochureModal = action.payload;
    },
  },
});

export const { setModalRdx, setBrochureModalRdx } = othersSlice.actions;

export default othersSlice.reducer;
