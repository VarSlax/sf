"use client";
import React from "react";
import Image from "next/image";
import mainLogo from "public/main-logo.svg";

const Header = () => {
  return (
    <>
      <div className="flex justify-between m-5">
        <Image className="flex" priority src={mainLogo} alt="No logo" />
        <div>booorger cuming soon</div>
      </div>
      <div className="h-px bg-gradient-sf"></div>
    </>
  );
};

export default Header;
