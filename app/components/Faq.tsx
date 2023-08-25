"use client";
import React, { useState } from "react";
import Image from "next/image";
import closeIcon from "public/cards/close-icon.svg";

const Faq = ({
  question,
  answer,
  additionalInfo,
}: {
  question: string;
  answer: string;
  additionalInfo: Array<string | undefined | []>;
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div>
        <div className="h-full">
          {!visible ? (
            <div
              onClick={() => setVisible((vis) => !vis)}
              className="my-3 mx-4"
            >
              {question}
              <div className="my-3 border-b-2 border-black"></div>
            </div>
          ) : (
            <>
              <div className="text-golden my-3 mx-4">
                <div
                  onClick={() => setVisible((vis) => !vis)}
                  className="flex justify-end"
                >
                  <Image
                    className="cursor-pointer"
                    src={closeIcon}
                    alt="ooops"
                  />
                </div>
                {question}
                <div className="text-white">{answer}</div>
                {additionalInfo && (
                  <div>
                    {
                      <>
                        {additionalInfo.map((info, i) => (
                          <div
                            className="mx-2.5 mb-3 text-base flex items-center text-white"
                            key={i + 54}
                          >
                            <svg
                              className="h-6 w-6 mr-2 flex-none stroke-golden stroke-2"
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
                      </>
                    }
                  </div>
                )}
                <div className="my-3 border-b-2 border-black"></div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Faq;
