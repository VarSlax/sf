"use client";

import { FC } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
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
  navigationMargin,
  modules = [],
  ...props
}: Partial<SwiperProps> & {
  cards: Card[];
  navigationMargin?: boolean;
  Component: FC<Card & { index: number }>;
  modules?: SwiperModule[];
}) => {
  return (
    <Swiper centeredSlides modules={modules} {...props}>
      {cards.map((props, i) => (
        <SwiperSlide
          key={i}
          className={`${navigationMargin ? "mb-12" : ""} w-auto`}
        >
          <Component {...props} index={i} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipedCardsWrapper;
