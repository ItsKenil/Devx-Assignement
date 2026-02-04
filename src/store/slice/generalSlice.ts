// ***** start - import from package
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// ***** end - import from package

// ***** start - import from files
import { GeneralState } from "@/src/constants/types/types";
// ***** end - import from files

// ***** start - set intital value for state
const initialState: GeneralState = {
  cartCount: 0,
};
// ***** end - set intital value for state

// ***** start - create slice for states
const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setCartCount(state, action: PayloadAction<number>) {
      state.cartCount = action.payload;
    }
  },
});
// ***** end - create slice for states

export const {
  setCartCount
} = generalSlice.actions;

export default generalSlice.reducer;
