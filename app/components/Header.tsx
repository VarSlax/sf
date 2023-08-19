"use client";
import React from "react";
import Image from "next/image";
import mainLogo from "public/main-logo.svg";
import BurgerWrapper from "./BurgerWrapper";

const Header = () => {
  return (
    <>
      <div className="flex justify-between m-5">
        <Image
          className="flex sticky z-50"
          priority
          src={mainLogo}
          alt="No logo"
        />
        <BurgerWrapper />
      </div>
      <div className="sticky z-50 h-px bg-gradient-sf"></div>
    </>
  );
};

export default Header;
