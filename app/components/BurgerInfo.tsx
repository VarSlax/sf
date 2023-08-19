import React from "react";
import Link from "next/link";

const BurgerInfo = ({ title }: { title: string }) => {
  return (
    <>
      <Link href="/" className="my-2">
        {title}
      </Link>
      <div className="border-black h-px border-b-[2px]"></div>
    </>
  );
};

export default BurgerInfo;
