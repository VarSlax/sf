"use client";

import { FC } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperModule } from "swiper/types";

interface Card {
  type: string;
  title: string;
  description: any;
  additionalDescription?: string[];
}

const SwipedCardsWrapper = ({
  Component,
  cards,
  modules = [],
  ...props
}: Partial<SwiperProps> & {
  cards: Card[];
  Component: FC<Card & { index: number }>;
  modules?: SwiperModule[];
}) => {
  return (
    <Swiper
      loop
      pagination
      centeredSlides
      autoplay={{ delay: 700000 }}
      modules={[Autoplay, Pagination, ...modules]}
      {...props}
    >
      {cards.map((props, i) => (
        <SwiperSlide key={i} className="w-auto">
          <Component {...props} index={i} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipedCardsWrapper;
