"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import topPart from "public/cards/top-part.svg";
import bottomPart from "public/cards/bottom-part.svg";

const EmsType = ({
  title,
  type,
  description,
  additionalDescription = [],
}: {
  title: string;
  type: string;
  description: string[];
  additionalDescription?: string[];
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (global.window?.innerWidth > 1024) {
      setVisible(true);
    }
  }, []);

  return (
    <div
      onClick={() => setVisible((vis) => !vis)}
      className="mx-8 my-16 h-[36rem] flex-row-reverse items-center overflow-hidden rounded-3xl max-lg:relative lg:pointer-events-none lg:my-32 lg:flex"
    >
      <div
        className="h-full w-full basis-1/2 rounded-3xl bg-cover bg-center max-lg:absolute lg:h-[30rem] lg:bg-cover"
        style={{ backgroundImage: `url('/cards/${type}.webp')` }}
      />
      <Image
        src={topPart}
        className={`absolute w-full transition-all duration-300 lg:hidden ${
          visible ? "-translate-y-36" : "-top-3"
        }`}
        alt="no logo"
      />
      <Image
        src={bottomPart}
        className={`absolute w-full transition-all duration-300 lg:hidden ${
          visible ? "-translate-y-[36rem]" : ""
        }`}
        alt="no logo"
      />
      <div className="relative z-10 h-full basis-1/2 px-5 py-2.5 lg:px-10 lg:py-20">
        <div className="text-3xl font-semibold uppercase text-golden lg:py-5">
          {title}
        </div>
        <div
          className={`transition-all duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {description.map((emsInfo, i) => (
            <div key={i}>
              <div className="my-4 flex items-center text-base">{emsInfo}</div>
              <div>
                {additionalDescription.map((description, i) => (
                  <div className="mb-0.5 flex items-center text-base" key={i}>
                    {i > 0 && (
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
                    )}
                    {description}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={"absolute bottom-5 right-5 text-end text-xl lg:hidden"}>
          {visible ? "Детальніше" : "Приховати"}
        </div>
      </div>
    </div>
  );
};

export default EmsType;
