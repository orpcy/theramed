import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
};

const progressSlice = createSlice({
  name: "progress",
  initialState: initialState,
  reducers: {
    updateStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { updateStep } = progressSlice.actions;

export default progressSlice.reducer;
