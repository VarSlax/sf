import React from "react";
import Image from "next/image";
import purpleBgImage from "public/prices/price-purple-bg.svg";
import goldBgImage from "public/prices/price-gold-bg.svg";

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

  return (
    <div
      id="abonements-section"
      style={{
        width: "10px",
        minWidth: "15rem",
        height: "45vh",
        border: even ? "0.50px #F2B700 solid" : "0.50px #9A34E8 solid",
        background: even
          ? "rgba(242, 183, 0, 0.10)"
          : "rgba(154, 52, 232, 0.10)",
      }}
      className="flex flex-col items-center justify-between p-4 rounded-[50px]"
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
          <div className="text-center" key={i}>
            {point}
          </div>
        ))}
      </div>
      <button
        style={{
          background: even
            ? "rgba(242, 183, 0, 0.85)"
            : "rgba(154, 52, 232, 0.45)",
        }}
        className="flex px-8 py-2 text-black text-2xl font-semibold bg-purple-600 bg-opacity-40 rounded-3xl border border-white border-opacity-40"
      >
        Замовити
      </button>
    </div>
  );
};

export default PriceCard;
