"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FC } from "react";

interface Card {
  id: number;
  type: string;
  title: string;
  description: any;
  additionalDescription?: string[];
}

const SwipedCardsWrapper = ({
  Component,
  pagination,
  cards,
}: {
  Component: FC<Card>;
  pagination?: boolean;
  cards: Card[];
}) => {
  return (
    <Swiper
      loop
      virtual
      pagination={pagination}
      className="mySwiper"
      autoplay={{
        delay: 700000,
        disableOnInteraction: true,
      }}
      modules={[Virtual, Autoplay, Pagination]}
    >
      {cards.map(({ ...props }, i) => (
        <SwiperSlide virtualIndex={i} key={i}>
          <Component {...props} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipedCardsWrapper;
