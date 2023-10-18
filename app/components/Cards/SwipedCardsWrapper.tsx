"use client";

import { FC } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";
import { SwiperModule } from "swiper/types";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

interface Card {
  type: string;
  title: string;
  description: any;
  additionalDescription?: string[];
}

const SwipedCardsWrapper = ({
  Component,
  paginationType,
  cards,
  delay,
  navigation,
  navigationMargin,
  modules = [],
  ...props
}: Partial<SwiperProps> & {
  cards: Card[];
  delay?: number;
  navigationMargin?: boolean;
  navigation?: boolean;
  paginationType?: any;
  Component: FC<Card & { index: number }>;
  modules?: SwiperModule[];
}) => {
  return (
    <Swiper
      pagination={{
        type: paginationType,
      }}
      scrollbar={{ hide: true }}
      centeredSlides
      navigation={navigation}
      autoplay={{ delay: delay }}
      modules={[Navigation, Autoplay, Pagination, Scrollbar, ...modules]}
      {...props}
    >
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
