import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputs/input-slice";
import progressSlice from "./progress/progress-slice";
import themeSlice from "./theme/theme-slice";

const store = configureStore({
  reducer: {
    progress: progressSlice,
    theme: themeSlice,
    input: inputSlice,
  },
});

export default store;
