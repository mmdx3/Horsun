import Image from "next/image";
import React from "react";

import Brandname from "@/public/icon/BrandName";
import Brand from "@/public/icon/BrandText";
import BrandIcon from "@/public/icon/BrandIcon";
const ImageSection = ({HeroImg} : {HeroImg : any}) => {
  return (
    <div className="w-[481px] h-[696px] gap-7  flex-col  select-none justify-center items-center hidden lg:flex">
      {/* Top Image */}
      <div className="w-[481px]  relative z-10 ">
        <Image src={HeroImg} alt="Hero img" draggable={false} />
      </div>
      {/* Bottom  */}
      <div className="w-[408px] gap-10 flex flex-col justify-start items-center  relative ">
        {/* Brand Name */}
        <div className="flex w-[196px] h-[55px] gap-4 justify-center items-center ">
          <div className="w-[131px] h-[54px] flex flex-col justify-center items-center ">
            <Brandname width="115" height="36" />
            <Brand width="131" height="18" />
          </div>
          <BrandIcon width="48" height="44px" />
        </div>

        {/* Brand Text */}
        <p className="w-[408px] h-[73px]  text-center leading-9 ">
          <span className="font-vazirFa text-[#d51f26] text-7 font-extralight text-[28px]">
            طعم لذت بخش غذا{" "}
          </span>
          <span className="font-vazirFa text-black font-extrabold text-[28px]">
            با بهترین کیفیت{" "}
          </span>
          <span className="font-vazirFa text-[27px] text-[#6b6b6b] ">
            شامل تازه ترین مواد اولیه
          </span>
        </p>
      </div>
    </div>
  );
};

export default ImageSection;
