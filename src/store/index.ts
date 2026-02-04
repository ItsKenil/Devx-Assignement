// ***** start - import from package
import { configureStore } from "@reduxjs/toolkit";
// ***** end - import from package

// ***** start - import from files
import generalReducer from "./slice/generalSlice";
// ***** end - import from files

// ***** start - config all slice reducer
export const store = configureStore({
  reducer: {
    general: generalReducer,
  },
});
// ***** end - config all slice reducer

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
