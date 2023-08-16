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
              <div className="text-yellow-500 my-3 mx-4">
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
                        {additionalInfo.map((x, i) => (
                          <div
                            className="text-white mx-2.5 text-base flex items-center mb-3"
                            key={i + 54}
                          >
                            <svg
                              className="h-6 w-6 mr-2 flex-none stroke-yellow-500 stroke-2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                                fill="none"
                              />
                            </svg>

                            {x}
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
