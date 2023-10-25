"use client";

import { useEffect, useState } from "react";
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
  const [wasVisible, setWasVisible] = useState(false);

  useEffect(() => {
    if (visible && !wasVisible) {
      setWasVisible(true);
    }
  }, [visible, wasVisible]);

  return (
    <div className="cursor-pointer max-lg:m-4 lg:basis-1/4 lg:p-5">
      <div
        className={`${
          wasVisible ? "" : "flex"
        } items-center justify-between rounded-3xl bg-gray-middle lg:min-h-full lg:flex-col lg:items-end lg:p-2 lg:hover:bg-gray-light`}
        onClick={() => setVisible((v) => !v)}
      >
        <div
          className={`mb-1 flex lg:flex-col-reverse lg:px-8 lg:pb-12 lg:pt-20 ${
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
          <span className="flex max-h-24 w-full items-center p-2 pr-0 text-base text-golden max-lg:mx-2 lg:pb-0 lg:text-center xl:text-xl">
            {title}
          </span>
        </div>
        {!wasVisible && (
          <div className="relative">
            <div className="absolute m-2 ml-0 h-8 w-8 animate-ping rounded-full border-2 border-golden text-center font-bold text-golden">
              ?
            </div>
            <div className="m-2 ml-0 h-8 w-8 rounded-full border-2 border-golden text-center font-bold text-golden">
              ?
            </div>
          </div>
        )}
        {visible && (
          <div className="p-2">
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
        )}
      </div>
    </div>
  );
};

export default WhyEmsCard;
