"use client";

import { FC } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Virtual } from "swiper/modules";
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
      virtual
      centeredSlides
      autoplay={{ delay: 700000 }}
      modules={[Virtual, Autoplay, Pagination, ...modules]}
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
