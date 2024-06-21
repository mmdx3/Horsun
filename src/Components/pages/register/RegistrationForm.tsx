"use client";
import Image from "next/image";
import React from "react";
import reg_icon from "@/public/icon/registerNameInput.svg";
import { useForm } from "react-hook-form";
import useValidateName from "@/src/hooks/useValidateName";
import useValidatePhoneNumber from "@/src/hooks/useValidatePhoneNumber";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setStep } from "@/src/context/slice/registerFormStep";

interface Inputs {
  name: string;
  phone: string;
}

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    console.log(data);
    dispatch(setStep(2));
  };

  return (
    <div className="lg:w-[413px] w-[357px]  h-[427px] lg:h-[484px] rounded-xl lg:rounded-2xl gap-4 lg:gap-8 bg-white py-8 lg:px-[3.32rem] px-9 flex flex-col justify-center items-center register-form-shadow-box">
      <div className="flex flex-col justify-start items-end gap-2 w-[278px] lg:w-[306px]">
        <h1 className="text-[#313131] text-xl font-bold font-dana ">ثبت نام</h1>
        <p className="text-[#494949] text-[12px]  lg:text-sm font-iransans ">
          لطفا جهت ثبت نام شماره موبایل خود را وارد نمایید
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-start items-end gap-8 w-full"
      >
        {/* name and family input */}
        <div className="flex flex-col justify-start items-end gap-2">
          <label
            htmlFor="name"
            className="text-[#242424] text-sm font-dana  font-[500] "
          >
            نام و نام خانوادگی
          </label>
          <div className="flex justify-center items-center w-[278px] lg:w-[306px] gap-1 rounded-lg border border-[#dbdbdb] py-0.5 px-2">
            <input
              type="text"
              {...register("name", { validate: useValidateName })}
              className="w-full h-10 rounded-lg  text-[#757575]  py-2 font-iransans text-sm px-0.5 border-none outline-none dir-rtl"
              placeholder="نام و نام خانوادگی خود را کامل وارد نمایید"
            />
            <div className="size-6 pt-0.5">
              <Image src={reg_icon} alt="" />
            </div>
          </div>
          {errors.name && (
            <p className="text-[#FF0000] text-sm font-vazirFa ">
              {errors.name.message}
            </p>
          )}
        </div>
        {/* mobile number input */}
        <div className="flex flex-col justify-start items-end gap-2">
          <label
            htmlFor="phone"
            className="text-[#242424] text-sm font-dana  font-[500] "
          >
            شماره موبایل
          </label>
          <div className="flex justify-center items-center w-[278px] lg:w-[306px] gap-1 rounded-lg border border-[#dbdbdb] py-0.5 px-2">
            <input
              type="tel"
              {...register("phone", {
                validate: useValidatePhoneNumber,
              })}
              className="w-full h-10 rounded-lg  text-[#757575]  py-2 font-iransans text-sm px-0.5 border-none outline-none dir-rtl"
              placeholder="شماره موبایل را وارد نمایید"
            />
            <div className="size-6 pt-0.5">
              <Image src={reg_icon} alt="" />
            </div>
          </div>
          {errors.phone && (
            <p className="text-[#FF0000] text-sm font-vazirFa ">
              {errors.phone.message}
            </p>
          )}
        </div>
        {/* Submit */}
        <input
          type="submit"
          value={"ثبت نام"}
          className="w-[278px] lg:w-[306px] h-10 rounded-lg bg-[#D51F26] flex justify-center items-center gap-1 p-2 cursor-pointer text-white font-dana text-sm"
        />

      </form>
        <div className="w-[174px] h-[24px] font-dana font-medium text-sm cursor-pointer ">
          ایا قبلا ثبت نام کرده اید؟ {" "}
          <Link href={'/auth/login'} className="font-bold text-[#d51f26] ">ورود </Link>
        </div>
    </div>
  );
};

export default RegistrationForm;
