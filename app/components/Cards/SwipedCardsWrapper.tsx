"use client";

import { FC } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SwiperModule } from "swiper/types";
import "swiper/css/navigation";

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
  navigation,
  marginBottom,
  modules = [],
  ...props
}: Partial<SwiperProps> & {
  cards: Card[];
  marginBottom?: boolean;
  navigation?: boolean;
  paginationType: any;
  Component: FC<Card & { index: number }>;
  modules?: SwiperModule[];
}) => {
  return (
    <Swiper
      loop
      pagination={{
        type: paginationType,
      }}
      centeredSlides
      navigation={navigation}
      autoplay={{ delay: 7000 }}
      modules={[Navigation, Autoplay, Pagination, ...modules]}
      {...props}
    >
      {cards.map((props, i) => (
        <SwiperSlide
          key={i}
          className={`${marginBottom ? "mb-12" : ""} w-auto`}
        >
          <Component {...props} index={i} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipedCardsWrapper;
