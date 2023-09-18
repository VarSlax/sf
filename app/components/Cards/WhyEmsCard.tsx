"use client";

import { useState } from "react";
import Image from "next/image";

const WhyEmsCard = ({
  title,
  type,
  description,
}: {
  title: string;
  type: string;
  description: Array<string | undefined>;
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="cursor-pointer max-lg:m-5 lg:basis-1/4 lg:p-3">
      <div
        className="rounded-3xl bg-gray-middle"
        onClick={() => setVisible((v) => !v)}
      >
        <div
          className={`mb-1 flex items-center lg:flex-col-reverse lg:px-8 lg:py-20 ${
            visible && "lg:hidden"
          }`}
        >
          <Image
            className="w-1/3 scale-110 rounded-2xl p-4 max-lg:bg-gray-light lg:w-full lg:p-7"
            src={`cards/${type}.svg`}
            alt="No reason"
            width={100}
            height={100}
          />
          <span className="max-h-24 w-full text-base text-golden max-lg:mx-5 lg:pb-12 lg:text-center lg:text-xl">
            {title}
          </span>
        </div>
        <div className={`${visible ? "block" : "hidden"} p-2`}>
          {description.map((reason, i) => (
            <div className="flex items-center p-2 text-sm" key={i}>
              <svg
                className="mr-2 h-6 w-6 flex-none stroke-golden stroke-2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              {reason}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyEmsCard;
