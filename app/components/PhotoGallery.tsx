'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar, Virtual } from 'swiper/modules';
import { dataForPhotoGallery } from '../constants/dataForPhotoGallery';
import 'swiper/css';
import 'swiper/css/scrollbar';

const PhotoGallery = () => {
  return (
    <Swiper
      id="photo-gallery-section"
      scrollbar={{
        hide: true,
      }}
      className="mySwiper h-1/3"
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, Scrollbar, Virtual]}
    >
      {dataForPhotoGallery.map(({ id, type }) => (
        <SwiperSlide virtualIndex={id} key={id} className="w-full">
          <Image
            width={500}
            height={200}
            src={`/cards/${type}.webp`}
            alt="no logo"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PhotoGallery;
