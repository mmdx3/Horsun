"use client";
import React from "react";
import useValidatePhoneNumber from "@/src/hooks/useValidatePhoneNumber";
import { useForm } from "react-hook-form";
import Phone_icon from "@/public/icon/PhoneIcon";
import SubmitBtn from "../../ui/SubmitBtn";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { SetLoginStep } from "@/src/context/slice/loginFormStep";
interface IForm {
  phone: string;
}
const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    console.log(data);
    
      dispatch(SetLoginStep(2));
  };

  return (
    <div className="w-[357px]  lg:w-[413px] h-[308px] lg:h-[357px] rounded-[13px]  lg:rounded-2xl gap-7 bg-white login_form_shadow flex flex-col justify-start items-end px-8 py-7">
      {/* Title */}
      <div className="w-[273px]  lg:w-[316px] h-[50px]  lg:h-[58px] gap-2 flex flex-col justify-start items-end mx-auto">
        <h1 className="text-[20px] lg:text-[23px] font-bold font-dana text-[#313131]">ورود</h1>
        <p className="text-[11px] lg:text-[14px] font-semibold text-right text-[#494949] font-dana_fanum">
          لطفا جهت ورود شماره موبایل خود را وارد نمایید
        </p>
      </div>
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[264px] lg:w-[306px] h-[172px] lg:h-[198px] gap-6 lg:gap-7 flex flex-col justify-start items-center mx-auto "
      >
        {/* Phone Number Input */}
        <div className="w-full  gap-2 flex flex-col justify-start items-end ">
          {/* Label */}
          <label
            htmlFor="Phone"
            className="w-[173px] lg:w-[201px] h-6 pb-1 font-dana font-medium text-[10px] lg:text-[12px] text-[#242424] text-right "
          >
            شماره موبایل
          </label>

          <div
            className={`flex justify-center items-center w-[264px] lg:w-[306px] gap-1 rounded-lg border  ${
              errors.phone ? "border border-red-500" : "border-[#dbdbdb]"
            }  py-0.5 px-2`}
          >
            <input
              type="tel"
              {...register("phone", {
                validate: useValidatePhoneNumber,
              })}
              className={`w-full h-10 rounded-lg  text-[#757575]  py-2 font-vazirFa text-sm border-none px-0.5 outline-none dir-rtl`}
              placeholder="شماره موبایل را وارد نمایید"
            />
            <div className="size-6 pt-0.5">
              <Phone_icon />
            </div>
          </div>
          {errors.phone && (
            <p className="text-[#FF0000] text-sm font-vazirFa ">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <SubmitBtn text="ورود" smWidth="264px"/>
        <div className=" h-[24px] font-dana font-medium text-[12px] lg:text-sm cursor-pointer ">
        ایا تا به حال ثبت نام نکرده اید؟{" "}
          <Link href={"/auth/register"} className="font-bold text-[#d51f26] ">
            ثبت نام{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
