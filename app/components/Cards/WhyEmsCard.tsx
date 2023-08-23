"use client";
import React, { useState } from "react";
import Image from "next/image";

const WhyEmsCard = ({
  title,
  reasonIcon,
  explainings,
}: {
  title: string;
  reasonIcon: string;
  explainings: Array<string | undefined>;
}) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className="m-5 flex flex-col bg-gray-middle rounded-[50px] text-white text-base font-thin">
        <div className="flex items-center mb-1">
          <div className="relative bottom-1 right-1 w-1/5 h-16 flex justify-center bg-gray-light rounded-[8px]">
            <Image className="flex" priority src={reasonIcon} alt="No reason" />
          </div>
          <span className="mx-2 text-golden font-thin text-xs">
            {title}
          </span>
        </div>
        <div className={visible ? "block" : "hidden"}>
          {explainings.map((el, i) => (
            <div className="mx-2.5 text-sm flex items-center mb-4" key={i}>
              <svg
                className="h-6 w-6 mr-2 flex-none stroke-golden stroke-2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              {el}
            </div>
          ))}
        </div>
        <button
          onClick={() => setVisible((vis) => !vis)}
          className="my-2 mx-6 p-1 text-white text-xs font-thin text-end"
          style={{
            display: "flex",
            justifyContent: `${visible ? "flex-end" : "flex-start"}`,
          }}
        >
          {visible ? "Приховати" : "Детальніше"}
        </button>
      </div>
    </>
  );
};

export default WhyEmsCard;
