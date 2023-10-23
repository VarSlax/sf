"use client";

import React, { useState } from "react";
import Image from "next/image";

const Faq = ({
  question,
  answer,
  additionalInfo,
}: {
  question: string;
  answer: string;
  additionalInfo: Array<string> | undefined;
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="h-full cursor-pointer">
      <div
        className={`${visible ? " text-golden" : ""} mx-4 my-3`}
        onClick={() => setVisible((vis) => !vis)}
      >
        <div className=" flex justify-between">
          {question}
          <Image
            className={`${
              visible ? "rotate-180 duration-200" : "duration-200"
            }`}
            width={25}
            height={25}
            src={`arrow.svg`}
            alt="no icon"
          />
        </div>

        {visible && (
          <>
            <div className="mt-4 text-white">{answer}</div>
            {additionalInfo && (
              <div>
                {additionalInfo.map((info, i) => (
                  <div
                    className="mx-2.5 mb-3 flex items-center text-base text-white"
                    key={i}
                  >
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
                    {info}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
        <div className="my-3 border-b-2 border-black"></div>
      </div>
    </div>
  );
};

export default Faq;
