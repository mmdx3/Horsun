"use client"

import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  if (pathname === '/auth/register' || pathname === '/auth/login') {
    return null
  }
  
  
  return <div>Header</div>;
};



export default Header;
