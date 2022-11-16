import { createSlice } from "@reduxjs/toolkit";
import { UserModal } from "../../modal";

export type UserSlice = {
    user:  UserModal ;
  }
  
const initialState = {
   user: {}
};

export const userSplice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    addUser: (state , action )  => {
        state.user = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = userSplice.actions;


export default userSplice.reducer;
