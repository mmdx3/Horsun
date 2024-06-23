"use client";
import React from "react";
import "../../css/register.css";
import Image from "next/image";
import registerbg from "@/public/images/register-bg.png";
import RegistrationForm from "@/src/Components/pages/register/RegistrationForm";
import ImageSection from "@/src/Components/ui/ImageSection";
import BrandName from "@/public/icon/BrandName";
import BrandText from "@/public/icon/BrandText";
import BrandIcon from "@/public/icon/BrandIcon";
import VerifcationCode from "@/src/Components/ui/VerifcationCode";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/context/Store";
import HeroImg from "@/public/icon/HeroImg.svg";
import { setStep } from "@/src/context/slice/registerFormStep";
const page = () => {
  const Step = useSelector((state: RootState) => state.registerFormStep.step);
  const dispatch = useDispatch();

  const backStep = () => {
    dispatch(setStep(1));
  };
  return (
    <div className="w-full h-screen mx-auto relative z-10 flex lg:flex-row flex-col  lg:justify-around justify-around items-center ">
      {/* bg Image */}
      <Image
        src={registerbg}
        alt="Registerbg "
        draggable={false}
        className="absolute top-0 left-0 z-[-1] w-full h-full lg:object-cover object-none object-center opacity-[0.35] select-none"
      />
      {/* Brand Name for mobile size */}
      <div className="flex w-[110px] h-[30px] gap-4 justify-center items-center lg:hidden">
        <div className="w-[73px] h-[30px] flex flex-col justify-center items-center ">
          <BrandName width="64" height="20" />
          <BrandText width="73" height="10" />
        </div>
        <BrandIcon width="26" height="24" />
      </div>

      <ImageSection HeroImg={HeroImg} />
      {Step === 1 ? (
        <RegistrationForm />
      ) : (
        <VerifcationCode backStep={backStep} />
      )}
    </div>
  );
};

export default page;
