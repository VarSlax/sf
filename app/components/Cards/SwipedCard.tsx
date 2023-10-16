"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SwipedCard = ({
  title,
  type,
  description,
}: {
  title: string;
  type: string;
  description: string;
}) => {
  const { push } = useRouter();

  return (
    <>
      <div className="h-full items-center max-lg:absolute lg:my-32 lg:flex">
        <div
          className="h-full w-full bg-cover bg-center max-lg:absolute max-lg:-scale-x-100 lg:h-[30rem] lg:rounded-3xl lg:bg-cover"
          style={{
            backgroundImage: `url('/cards/${type}.webp')`,
            backgroundPositionX: type === "ems" ? "70%" : "",
          }}
        />
        <div className="relative z-10 p-5 lg:w-2/3 lg:pl-12">
          <span className="text-2xl font-semibold uppercase text-golden xs:text-3xl">
            {title}
          </span>
          <div className="my-3 text-base max-lg:w-2/3 xs:my-6">
            {description}
          </div>
          <Link
            href="/order"
            className="cursor-pointer rounded-full bg-golden px-5 py-1 text-xl font-semibold text-black xs:text-2xl"
          >
            Записатися
          </Link>
        </div>
      </div>
      <svg
        className="relative h-full w-full lg:hidden"
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="540"
        viewBox="0 0 375 540"
        fill="none"
      >
        <g filter="url(#filter0_b_730_1279)">
          <path
            d="M0 0H375L194 261L0 540V0Z"
            fill="url(#paint0_linear_730_1279)"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_730_1279"
            x="-4"
            y="-4"
            width="383"
            height="548"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_730_1279"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_730_1279"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_730_1279"
            x1="187.5"
            y1="0"
            x2="187.5"
            y2="585"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#171717" />
            <stop offset="1" stopColor="#171717" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default SwipedCard;
