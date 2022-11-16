import { createSlice } from "@reduxjs/toolkit";
import { UserModal } from "../../modal";


  
const initialState = {
    otp: "",
    countdown: 60,
};

export const otpSplice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    setOTP: (state , action )  => {
        state.otp = action.payload
    },
    setCountdown: (state , action ) => {
      state.countdown = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setOTP , setCountdown } = otpSplice.actions;


export default otpSplice.reducer;
