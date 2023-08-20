"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar, Virtual } from "swiper/modules";
import { dataForPhotoGallery } from "./Cards/constants/dataForPhotoGallery";
import getImageForGallery from "../utils/getImageForGallery";
import "swiper/css";
import "swiper/css/scrollbar";

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
      {dataForPhotoGallery.map(({ id, type }, i) => (
        <SwiperSlide virtualIndex={id} key={id}>
          <Image
            className="w-full"
            src={getImageForGallery(type) ?? ""}
            alt="aboba"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PhotoGallery;
