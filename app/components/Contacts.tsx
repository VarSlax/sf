import React from 'react';
import Image from 'next/image';

const Contacts = ({
  type,
  info,
}: {
  type: string;
  info: string[] | string;
}) => (
  <div className="mx-4">
    <div className="flex">
      <Image
        className="mr-4"
        width={25}
        height={25}
        src={`${type}.svg`}
        alt="no icon"
      />
      {typeof info === 'string' ? (
        <div className="my-2">{info}</div>
      ) : (
        <div className="my-2">
          {info.map((el, i) => (
            <div key={i}>{el}</div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default Contacts;
