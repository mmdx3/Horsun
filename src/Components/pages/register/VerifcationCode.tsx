"use client";

import useCountDown from "@/src/hooks/useCountDown";
import OTPInput from "./OtpInput";
import { formatTime } from "@/src/utils/FormatTime";
import ArrowBackLeft from "@/public/icon/ArrowBackLeft";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/context/Store";
import SweetAlert from "../../ui/SweetAlert";
import { setStep } from "@/src/context/slice/registerFormStep";

const VerifcationCode = () => {
  const dispatch = useDispatch();
  const counter = useCountDown();

  const FormatTime = formatTime(counter);

  const Otp = useSelector((state: RootState) => state.Otp.value);

  const OnSubmit = () => {
    if (Otp.length > 3) {
      SweetAlert({
        timer: 3000,
        title: "i will close in 2 secend",
        icon: "success",
        position: "top-end",
      });
    }
  };
  
  // Back To Register Form 
  const BackStep = () => {
    dispatch(setStep(1));
  }
  
  return (
    <div className="w-[357px] lg:w-[413px] h-[392px] lg:h-[454px] rounded-xl lg:rounded-2xl  gap-6 lg:gap-8 bg-white register-form-shadow-box flex flex-col justify-center items-center px-4 lg:px-8 py-8 relative">
      <div className="w-[309px] h-[82px] gap-2 flex flex-col justify-center items-center">
        <h4 className="font-bold text-[20px] lg:text-2xl text-[#2E2E2E] ">
          کد تایید
        </h4>
        <p className="font-vazirFa font-semibold text-[11px] lg:text-sm text-[#404040] text-center max-sm:w-[264px] ">
          کد 4 رقمی ارسال شده به شماره موبایل{" "}
          <span className=""> 09354501795 </span> را وارد نمایید.
        </p>
      </div>
      {/* Inpu code */}
      <div className="w-[195px]  lg:w-[226px] h-[55px] lg:h-[62px] gap-4 flex  justify-center items-center flex-col ">
        <OTPInput />
      </div>
      {/* Submit */}
      <div className="w-[264px] lg:w-[306px] h-[81px] lg:h-[93px] gap-6 lg:gap-7 flex flex-col justify-center items-center">
        <button
          className={`w-full h-[35px] lg:h-10 rounded-lg ${
            Otp.length !== 4
              ? "bg-[#E0E0E0] cursor-wait"
              : "bg-[#D51F26] cursor-pointer"
          } text-white `}
          disabled={!Otp}
          onClick={OnSubmit}
        >
          تایید و ثبت نام
        </button>

        <h3 className="font-vazirFa font-medium text-sm ">
          تا <span className="text-[#D51F26] ">ارسال مجدد کد </span>{" "}
          {FormatTime}
        </h3>
      </div>
      {/* Back to Register Form */}
      <div onClick={BackStep} className="w-[68px] h-[18px] gap-1 flex justify-center items-center cursor-pointer absolute top-9 left-[1.25rem] lg:left-9 ">
        <ArrowBackLeft width={"18"} height={"18"} smWidth="15" />
        <span className="font-dana font-normal text-[8px]  lg:text-[10px] text-[#313131] ">
          بازگشت{" "}
        </span>
      </div>
    </div>
  );
};

export default VerifcationCode;
