import { createSlice , PayloadAction } from "@reduxjs/toolkit";


interface RegisterFormStep {
    step: number;
}

const initialState: RegisterFormStep = {
    step : 1
}

const RegisterFormStepSlice = createSlice({
    name: "registerFormStep",
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload;
        }
    }
})

export const {setStep} = RegisterFormStepSlice.actions;

export default RegisterFormStepSlice.reducer;