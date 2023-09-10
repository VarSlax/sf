"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import purpleBgImage from "public/prices/price-purple-bg.svg";
import goldBgImage from "public/prices/price-gold-bg.svg";

const PriceCard = ({
  id,
  type,
  description,
}: {
  id: number;
  type: string;
  description: string[];
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
      className="flex h-[52vh] w-3 min-w-[17rem] flex-col items-center justify-between rounded-card-radius p-4 lg:h-[40vh] lg:min-w-[20rem]"
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
      <button
        onClick={() => push("/order")}
        style={{
          background: even
            ? "rgba(242, 183, 0, 0.85)"
            : "rgba(154, 52, 232, 0.45)",
        }}
        className="flex cursor-pointer rounded-3xl border border-white border-opacity-40 bg-purple bg-opacity-40 px-8 py-1 text-2xl font-semibold text-black"
      >
        Замовити
      </button>
    </div>
  );
};

export default PriceCard;
