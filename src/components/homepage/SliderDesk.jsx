import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function SliderDesk() {
  const fetchDeskSliderItems = async () => {
    const response = await fetch("/api/v1/");
    if (!response.ok) throw new Error("error fetching data");
    const data = await response.json();
    return data?.data?.header_banners || [];
  };

  const {
    data: slides = [],
    isloading,
    error,
  } = useQuery({
    queryKey: ["sliderDeskItems"],
    queryFn: fetchDeskSliderItems,
  });
  if (isloading) return <p>Loading</p>;
  if (error) return <p>Erorror occured : {error.message}</p>;

  return (
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
