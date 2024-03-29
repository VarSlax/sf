"use client";

import Image from "next/image";
import purpleBgImage from "public/prices/price-purple-bg.svg";
import goldBgImage from "public/prices/price-gold-bg.svg";
import Link from "next/link";

const PriceCard = ({
  index,
  type,
  description,
}: {
  index: number;
  type: string;
  description: string[];
}) => {
  const even = index % 2;

  return (
    <div
      className={`${
        even ? "bg-golden text-black" : "bg-purple"
      } mx-auto my-16 flex h-[55vh] w-3 min-w-[17rem] flex-col items-center justify-between rounded-card-radius p-8 lg:min-w-[20vw]`}
    >
      <div className="relative">
        {even ? (
          <Image src={goldBgImage} alt="asd" />
        ) : (
          <Image src={purpleBgImage} alt="asd" />
        )}
        <Image
          className="absolute right-10 top-10"
          width={80}
          height={80}
          src={`prices/${type}.svg`}
          alt="no img"
        />
      </div>
      <div>
        {description.map((info, i) => (
          <div className="text-center" key={i}>
            {info}
          </div>
        ))}
      </div>
      <Link
        href="/order"
        className={`${
          even ? "border-black text-black" : "border-white text-white"
        } flex cursor-pointer rounded-3xl border border-opacity-40 bg-opacity-40 px-8 py-1 text-2xl font-semibold`}
      >
        Записатися
      </Link>
    </div>
  );
};

export default PriceCard;
