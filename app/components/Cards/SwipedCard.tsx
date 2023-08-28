"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import divider from "public/cards/swipe-card-divider.svg";

const SwipedCard = ({
  title,
  bgImage,
  description,
}: {
  title: string;
  bgImage: string;
  description: string;
}) => {
  const { push } = useRouter();

  return (
    <>
      <div
        className="h-mobile-card-height relative bg-cover"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        <span className="absolute z-10 flex my-2.5 mx-5 h-4 text-golden font-semibold text-3xl uppercase">
          {title}
        </span>
        <div className="flex">
          <div className="absolute z-10 w-7/12 top-20 left-5 description text-base">
            {description}
          </div>
        </div>
        <button
          onClick={() => push("/order")}
          className="absolute mt-56 ml-4 z-10 px-8 py-0.5 text-black text-2xl font-semibold bg-golden rounded-3xl cursor-pointer"
        >
          Замовити
        </button>
        <Image
          src={divider}
          layout="fill"
          objectFit="contain"
          className="h-initial-height-important"
          alt="no logo"
        />
      </div>
    </>
  );
};

export default SwipedCard;
