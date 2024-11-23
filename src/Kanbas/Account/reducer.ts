import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
console.log("reducer");
console.log(accountSlice.actions);

export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;