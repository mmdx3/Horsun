"use client";
import React from "react";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathname = usePathname();

  if (pathname === "/auth/register" || pathname === "/auth/login") {
    return null;
  }

  return <div>Footer</div>;
};

export default Footer;
