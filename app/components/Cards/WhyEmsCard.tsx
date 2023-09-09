'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const WhyEmsCard = ({
  title,
  type,
  description,
}: {
  title: string;
  type: string;
  description: Array<string | undefined>;
}) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className="m-5 flex flex-col bg-gray-middle rounded-3xl text-white text-base">
        <div className="flex items-center mb-1">
          <div className="relative bottom-1 right-1 w-1/2 h-[12 vh] flex justify-center bg-gray-light rounded-lg">
            <Image
              className="w-full p-6"
              priority
              width={100}
              height={100}
              src={`cards/${type}.svg`}
              alt="No reason"
            />
          </div>
          <span className="w-full mx-2 text-golden text-base">{title}</span>
        </div>
        <div className={visible ? 'block' : 'hidden'}>
          {description.map((reason, i) => (
            <div
              className="mx-2.5 text-sm flex items-center mb-4"
              key={i + 228}
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
              {reason}
            </div>
          ))}
        </div>
        <button
          onClick={() => setVisible((vis) => !vis)}
          className={`flex ${
            visible ? 'justify-end' : 'justify-start'
          } my-2 mx-6 p-1 text-white text-xs text-end`}
        >
          {visible ? 'Приховати' : 'Детальніше'}
        </button>
      </div>
    </>
  );
};

export default WhyEmsCard;
