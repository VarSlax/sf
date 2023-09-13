"use client";
import { useState } from "react";
import Image from "next/image";
import topPart from "public/cards/top-part.svg";
import bottomPart from "public/cards/bottom-part.svg";

const EmsType = ({
  title,
  type,
  description,
  additionalDescription,
}: {
  title: string;
  type: string;
  description: string[];
  additionalDescription?: string[];
}) => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="m-5 h-[36rem] items-center max-lg:relative lg:my-32 lg:flex">
      <div
        className="h-full w-full rounded-3xl bg-cover bg-center max-lg:absolute lg:h-[30rem] lg:bg-cover"
        style={{ backgroundImage: `url('/cards/${type}.webp')` }}
      />
      <div>
        <span className="absolute mx-5 my-2.5 w-full text-3xl font-semibold uppercase text-golden xl:mx-10 xl:my-10">
          {title}
        </span>
        {visible && <Image src={topPart} className="w-full" alt="no logo" />}
      </div>
      <div
        className={`${visible ? "hidden" : "block"}`}
        style={{
          backdropFilter: visible ? "inherit" : "brightness(0.3)",
        }}
      >
        {!additionalDescription
          ? description.map((emsInfo, i) => (
              <div
                className="mx-2.5 mb-4 flex items-center text-base text-white"
                key={i}
              >
                {emsInfo}
              </div>
            ))
          : description.map((emsInfo, i) => (
              <div key={i}>
                <div className="mx-2.5 mb-4 flex items-center text-base">
                  {emsInfo}
                </div>
                <div>
                  {additionalDescription.map((description, i) => (
                    <div
                      className="mx-2.5 mb-0.5 flex items-center text-base"
                      key={i}
                    >
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
      <div className="ml-6">
        <button
          onClick={() => setVisible((vis) => !vis)}
          className={`flex ${
            visible ? "justify-end" : "justify-start"
          } absolute bottom-[1%] right-[1%] mx-6 my-2 text-end text-xl text-white`}
        >
          {visible ? "Детальніше" : "Приховати"}
        </button>
        {visible && (
          <Image src={bottomPart} className="-mb-px w-full" alt="no logo" />
        )}
      </div>
    </div>
  );
};

export default EmsType;
