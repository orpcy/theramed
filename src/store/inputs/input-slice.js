import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  resetPassword: "",
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    handleChange: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetInputs: (state) => {
      state.username = "";
      state.email = "";
      state.password = "";
    },
  },
});

export const { handleChange, resetInputs } = inputSlice.actions;

export default inputSlice.reducer;
