"use client";

import BrandIcon from "@/public/icon/BrandIcon";
import BrandName from "@/public/icon/BrandName";
import BrandText from "@/public/icon/BrandText";
import CartIcon from "@/public/icon/CartIcon";
import DownloadIcon from "@/public/icon/DownloadIcon";
import PersonalAccountIcon from "@/public/icon/PersonalAccountIcon";
import SearchIcon from "@/public/icon/SearchIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useLayoutEffect, useState } from "react";

interface InavItems {
  path: string;
  name: string;
}

const NavItems: InavItems[] = [
  { path: "/contact-us", name: "تماس با ما" },
  { path: "/about-us", name: "درباره ما" },
  { path: "/blog", name: "مقالات" },
  { path: "/reservation", name: "رزرو غذا" },
  { path: "/", name: "صفحه اصلی" },
];

const Header = () => {
  const [position, setPosition] = useState("");
  const pathname = usePathname();

  if (pathname === "/auth/register" || pathname === "/auth/login") {
    return null;
  }

  useLayoutEffect(() => {
    if (pathname === "/") {
      setPosition("33%");
    } else if (pathname === "/reservation") {
      setPosition("41%");
    } else if (pathname === "/blog") {
      setPosition("47%");
    } else if (pathname === "/about-us") {
      setPosition("52%");
    } else if (pathname === "/contact-us") {
      setPosition("58%");
    }
  }, [pathname]);

  const Onclick = (item: string) => {
    switch (item) {
      case "صفحه اصلی":
        setPosition("33%");
        break;
      case "رزرو غذا":
        setPosition("41%");
        break;
      case "مقالات":
        setPosition("47%");
        break;
      case "درباره ما":
        setPosition("52%");
        break;
      case "تماس با ما":
        setPosition("58%");
        break;
      default:
        setPosition("33%");
        break;
    }
  };

  return (
    <header className="container mx-auto px-4 py-2  lg:rounded-[28px] lg:gap-[12px]  flex flex-col justify-center items-center relative">
      <div className="lg:h-[75px] lg:rounded-[28px] lg:gap-[230px]  flex justify-center items-center">
        {/* Icons */}
        <div className="lg:w-[235px] lg:h-[49px] lg:gap-[13px] lg:flex hidden justify-center items-center ">
          {/* Personal Account Icon */}
          <div className="w-[48px] h-[48px] rounded-lg gap-[11px] flex bg-white cursor-pointer icons_shadow justify-center items-center hover:scale-[1.05] transition-all duration-300 ease-linear">
            <PersonalAccountIcon />
          </div>
          {/* Cart Icon */}
          <div className="w-[48px] h-[48px] rounded-lg gap-[11px] flex bg-white cursor-pointer icons_shadow justify-center items-center hover:scale-[1.05] transition-all duration-300 ease-linear">
            <CartIcon />
          </div>
          {/* Search Icon */}
          <div className="w-[48px] h-[48px] rounded-lg gap-[11px] flex bg-white cursor-pointer icons_shadow justify-center items-center hover:scale-[1.05] transition-all duration-300 ease-linear">
            <SearchIcon />
          </div>
          {/* Download pwa Icon */}
          <div className="w-[48px] h-[48px] rounded-lg gap-[11px] flex bg-white cursor-pointer icons_shadow justify-center items-center hover:scale-[1.05] transition-all duration-300 ease-linear">
            <DownloadIcon />
          </div>
        </div>
        {/* Nav Bar */}
        <ul className="w-[438px] h-[25px] gap-[35px] lg:flex hidden justify-center items-center">
          {NavItems.map((item) => (
            <li
              className="font-dana font-medium text-[16px] text-black cursor-pointer "
              key={item.path}
              onClick={() => Onclick(item.name)}
            >
              <Link
                href={item.path}
                className="font-dana font-medium text-[16px] text-black cursor-pointer "
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Brand Icon */}
        <Link
          href={"/"}
          className="lg:w-[179px] lg:h-[49px] flex lg:gap-[16px] justify-center items-center cursor-pointer"
        >
          <div className="lg:w-[119px] lg:h-[49px] flex flex-col ">
            <BrandName width="105" height="33" />
            <BrandText width="119" height="16" />
          </div>
          <BrandIcon width="44" height="40" />
        </Link>
      </div>
      {/* border bottom */}
      <div className="w-[90%] border -rotate-180 border-[#E7E7E7] lg:block hidden" />
      <div
        className={`w-[40px] h-[6px] rounded-[6px] bg-[#F6B529] lg:block absolute hidden top-[89px]  transition-all duration-300 ease-linear `}
        style={{ right: `${position}` }}
      ></div>
    </header>
  );
};

export default Header;
