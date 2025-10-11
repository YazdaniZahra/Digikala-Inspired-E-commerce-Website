import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import "swiper/css";
import "swiper/css/pagination";

export default function Slider() {
  const fetchSliderItems = async () => {
    const response = await fetch("/api/v3/");
    if (!response.ok) throw new Error("error fetching data");

    const data = await response.json();
    const widget = data?.data?.widgets?.find(
      (widget) => widget.type === "dkms_banner"
    );
    return widget?.data?.items || [];
  };

  const {
    data: slides = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["sliderItems"],

    queryFn: fetchSliderItems,
    staleTime: 1000 * 60 * 60,
  });
  if (isLoading) return <p>Loading</p>;
  if (error) return <p>Error occured : {error.message}</p>;
  return (
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
