"use client";
import React from "react";
import Image from "next/image";
import purpleBgImage from "public/prices/price-purple-bg.svg";
import goldBgImage from "public/prices/price-gold-bg.svg";
import { useRouter } from "next/navigation";

const PriceCard = ({
  id,
  info,
  iconType,
}: {
  id: number;
  info: Array<string>;
  iconType: string;
}) => {
  const even = id % 2;
  const { push } = useRouter();

  return (
    <div
      id="abonements-section"
      style={{
        border: even ? "0.50px #F2B700 solid" : "0.50px #9A34E8 solid",
        background: even
          ? "rgba(242, 183, 0, 0.10)"
          : "rgba(154, 52, 232, 0.10)",
      }}
      className="flex flex-col items-center justify-between w-3 h-[52vh] md:h-[40vh] min-w-[17rem] md:min-w-[20rem] p-4 rounded-card-radius"
    >
      <div className="relative">
        {even ? (
          <Image src={goldBgImage} alt="asd" />
        ) : (
          <Image src={purpleBgImage} alt="asd" />
        )}
        <Image
          className="absolute top-7 right-10"
          src={iconType}
          alt="no img"
        />
      </div>
      <div>
        {info.map((point, i) => (
          <div className="text-center" key={i + 34}>
            {point}
          </div>
        ))}
      </div>
      <button
        onClick={() => push("/order")}
        style={{
          background: even
            ? "rgba(242, 183, 0, 0.85)"
            : "rgba(154, 52, 232, 0.45)",
        }}
        className="flex px-8 py-1 text-black text-2xl font-semibold bg-purple bg-opacity-40 rounded-3xl border border-white border-opacity-40 cursor-pointer"
      >
        Замовити
      </button>
    </div>
  );
};

export default PriceCard;
