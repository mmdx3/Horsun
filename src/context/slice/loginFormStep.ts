import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitailState {
  step: number;
}

const initailstate: InitailState = {
  step: 1,
};

const LoginFormStep = createSlice({
  name: "LoginFormStep",
  initialState: initailstate,
  reducers: {
    SetLoginStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
  },
});

export const { SetLoginStep } = LoginFormStep.actions;
export default LoginFormStep.reducer;
