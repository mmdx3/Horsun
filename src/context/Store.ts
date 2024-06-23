import { configureStore } from "@reduxjs/toolkit";
import OtpSlice from "./slice/OtpSlice";
import registerFormStepSlice from "./slice/registerFormStep";
import loginFormStep from "./slice/loginFormStep";

export const store = configureStore({
  reducer: {
    Otp: OtpSlice,
    registerFormStep: registerFormStepSlice,
    loginformStep: loginFormStep,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
