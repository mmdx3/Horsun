import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  value: string;
}

const initialState: InitialState = {
  value: "",
};

export const OtpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    setOtp: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const {setOtp} = OtpSlice.actions;

export default OtpSlice.reducer