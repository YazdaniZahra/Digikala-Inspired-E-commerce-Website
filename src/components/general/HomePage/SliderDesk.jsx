import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function SliderDesk() {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    fetch("/api/v1/")
      .then((res) => res.json())
      .then((data) => {
        setSlides(data?.data?.header_banners || []);
      });
  }, []);

  return slides.length === 0 ? (
    <div>در حال بارگذاری اسلایدها...</div>
  ) : (
    <div className="w-full hidden lg:block">
      <Swiper
        className="headerswipper"
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={slides.length > 1}
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView={1}
        pagination={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full rounded-lg object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
