import React from "react";
import Image from "next/image";

const Contacts = ({
  icon,
  info,
}: {
  icon: string;
  info: Array<string> | string;
}) => (
  <div className="mx-4">
    <div className="flex">
      <Image className="mr-4" src={icon} alt="no logo" />
      {typeof info === "string" ? (
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
