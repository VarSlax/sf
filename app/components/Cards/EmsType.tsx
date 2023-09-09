'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import topPart from 'public/cards/top-part.svg';
import bottomPart from 'public/cards/bottom-part.svg';

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
    <div className="w-[21rem] min-w-[21rem] xl:min-w-[31rem] xl:rounded-[68px] mx-2 my-10 flex flex-col justify-between bg-cover bg-gray-middle rounded-card-radius text-base relative">
      <Image src={`/cards/${type}.jpeg`} alt="123" fill />
      <div>
        <span className="my-2.5 mx-5 xl:my-10 xl:mx-10 w-full text-golden font-semibold text-3xl uppercase absolute">
          {title}
        </span>
        {visible && <Image src={topPart} className="w-full" alt="no logo" />}
      </div>
      <div
        className={`${visible ? 'hidden' : 'block'}`}
        style={{
          backdropFilter: visible ? 'inherit' : 'brightness(0.3)',
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
                <div className="mx-2.5 text-base flex items-center mb-4">
                  {emsInfo}
                </div>
                <div>
                  {additionalDescription.map((description, i) => (
                    <div
                      className="mx-2.5 text-base flex items-center mb-0.5"
                      key={i}
                    >
                      {i > 0 && (
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
            visible ? 'justify-end' : 'justify-start'
          } my-2 mx-6 text-white text-xl text-end absolute right-[1%] bottom-[1%]`}
        >
          {visible ? 'Детальніше' : 'Приховати'}
        </button>
        {visible && (
          <Image src={bottomPart} className="w-full -mb-px" alt="no logo" />
        )}
      </div>
    </div>
  );
};

export default EmsType;
