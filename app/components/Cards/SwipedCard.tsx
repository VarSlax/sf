'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import divider from 'public/cards/swipe-card-divider.svg';

const SwipedCard = ({
  title,
  bgImage,
  description,
}: {
  title: string;
  bgImage: any;
  description: string;
}) => {
  const { push } = useRouter();

  return (
    <div
      className="bg-cover"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="absolute p-5">
        <span className="text-golden font-semibold text-3xl uppercase">
          {title}
        </span>
        <div className="my-6 text-base w-2/3">{description}</div>
        <button
          onClick={() => push('/order')}
          className="px-5 py-1 text-black text-2xl font-semibold bg-golden rounded-full cursor-pointer"
        >
          Замовити
        </button>
      </div>
      <svg
        className="w-full h-full"
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
    </div>
  );
};

export default SwipedCard;
