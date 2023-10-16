import React from "react";
import Image from "next/image";

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
      {type === "phone" || typeof info === "string" ? (
        <a href="tel:+380739797097" className="my-2">
          {info}
        </a>
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
