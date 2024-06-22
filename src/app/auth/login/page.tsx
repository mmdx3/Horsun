import Image from "next/image";
import React from "react";
import Login_bg from "@/public/images/register-bg.png";
import BrandName from "@/public/icon/BrandName";
import BrandText from "@/public/icon/BrandText";
import BrandIcon from "@/public/icon/BrandIcon";
import HeroImg from "@/public/icon/login-image-section.svg";
import ImageSection from "@/src/Components/ui/ImageSection";
import LoginForm from "@/src/Components/pages/Login/LoginForm";
const page = () => {
  return (
    <div className="w-full h-screen mx-auto relative z-10 flex lg:flex-row flex-col  lg:justify-around justify-around items-center ">
      {/* bg Image */}
      <Image
        src={Login_bg}
        alt="Login Bg "
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

      {/* Hero Image Section */}
      <ImageSection HeroImg={HeroImg} />

      <LoginForm />
    </div>
  );
};

export default page;
