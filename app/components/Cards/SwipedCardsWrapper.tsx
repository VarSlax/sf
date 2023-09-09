'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Virtual } from 'swiper/modules';
import { dataForSwipedCards } from '../../constants/dataForSwipedCards';
import SwipedCard from './SwipedCard';
import getBgImageForSwipedCard from '../../utils/getBgImageForSwipedCard';
import 'swiper/css';
import 'swiper/css/pagination';

const SwipedCardsWrapper = () => {
  return (
    <Swiper
      loop
      virtual
      pagination={true}
      className="mySwiper"
      autoplay={{
        delay: 700000,
        disableOnInteraction: true,
      }}
      modules={[Virtual, Autoplay, Pagination]}
    >
      {dataForSwipedCards.map(({ id, type, title, description }, i) => (
        <SwiperSlide virtualIndex={id} key={id}>
          <SwipedCard
            title={title}
            description={description}
            bgImage={getBgImageForSwipedCard(type)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipedCardsWrapper;
