"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Virtual } from "swiper/modules";

interface Card {
  type: string;
  title: string;
  description: any;
  additionalDescription?: string[];
}

const SwipedCardsWrapper = ({
  Component,
  cards,
  ...props
}: {
  Component: FC<Card & { index: number }>;
  cards: Card[];
}) => {
  return (
    <Swiper
      loop
      virtual
      centeredSlides
      spaceBetween={1}
      autoplay={{ delay: 700000 }}
      modules={[Virtual, Autoplay, Pagination]}
      {...props}
    >
      {cards.map((props, i) => (
        <SwiperSlide virtualIndex={i} key={i}>
          <Component {...props} index={i} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipedCardsWrapper;
