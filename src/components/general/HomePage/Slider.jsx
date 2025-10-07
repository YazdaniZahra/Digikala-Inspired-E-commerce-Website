import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";

export default function Slider() {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    fetch("/api/v3/")
      .then((res) => res.json())
      .then((data) => {
        const widget = data?.data?.widgets?.find(
          (widget) => widget.type === "dkms_banner"
        );
        setSlides(widget.data.items || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return slides.length === 0 ? (
    <div>در حال بارگذاری اسلایدها...</div>
  ) : (
    <div className="w-full lg:hidden">
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
        slidesPerView={1.1}
        pagination={{
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image.url}
              alt={slide.title}
              className="w-full rounded-lg  object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
