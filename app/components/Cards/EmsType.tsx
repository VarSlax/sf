"use client";
import React, { useState } from "react";
import Image from "next/image";
import topPart from "public/cards/top-part.svg";
import bottomPart from "public/cards/bottom-part.svg";

const EmsType = ({
  title,
  bgImage,
  explainings,
  additionalExplainings,
}: {
  title: string;
  bgImage: string;
  explainings: Array<string | undefined>;
  additionalExplainings: Array<string | undefined>;
}) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div
        className="mx-2 my-10 flex flex-col justify-between bg-cover bg-gray-middle rounded-[50px] text-base relative"
        style={{
          width: "21rem",
          minWidth: "21rem",
          height: "66vh",
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        <div>
          <span className="my-2.5 mx-5 w-full text-golden font-semibold text-3xl uppercase absolute">
            {title}
          </span>
          {visible && <Image src={topPart} className="w-full" alt="aboba" />}
        </div>
        <div
          style={{
            display: visible ? "none" : "block",
            backdropFilter: visible ? "inherit" : "brightness(0.3)",
          }}
        >
          {!additionalExplainings
            ? explainings.map((el, i) => (
                <div
                  className="mx-2.5 mb-4 flex items-center text-base text-white font-thin"
                  key={i}
                >
                  {el}
                </div>
              ))
            : explainings.map((x, i) => (
                <>
                  <div
                    className="mx-2.5 text-base flex items-center mb-4"
                    key={i}
                  >
                    {x}
                  </div>
                  <div>
                    {additionalExplainings.map((x, i) => (
                      <div
                        className="mx-2.5 text-base flex items-center mb-0.5"
                        key={i + 100}
                      >
                        {i > 0 && (
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
                        )}
                        {x}
                      </div>
                    ))}
                  </div>
                </>
              ))}
        </div>
        <div className="ml-6">
          <button
            onClick={() => setVisible((vis) => !vis)}
            className="my-2 mx-6 text-white text-xl font-thin text-end absolute"
            style={{
              display: "flex",
              justifyContent: `${visible ? "flex-end" : "flex-start"}`,
              right: "1%",
              bottom: "1%",
            }}
          >
            {visible ? "Детальніше" : "Приховати"}
          </button>
          {visible && (
            <Image
              style={{ marginBottom: "-1px" }}
              src={bottomPart}
              className="w-full"
              alt="aboba"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default EmsType;
