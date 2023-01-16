import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeSelected: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.themeSelected = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
