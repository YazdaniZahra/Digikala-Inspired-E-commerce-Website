import Toman from "@/assets/icons/Toman";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AmazingOfferHDesk from "./AmazingOfferHDesk";

const fetchAmazingProducts = async () => {
  const response = await fetch("/api/v1/widget-factory/widget/13/");
  if (!response.ok) throw new Error("error fetching data");
  const data = await response.json();
  return data?.data?.data?.products || [];
};

export default function AmazingProductsDesktop() {
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["amazingOfferProducts"],
    queryFn: fetchAmazingProducts,
    staleTime: 1000 * 60 * 60,
  });
  if (isLoading) return <p>Loading</p>;
  if (error) return <p>Error occured : {error.message}</p>;

  return (
    <div className="hidden lg:block">
      <Swiper
        spaceBetween={4}
        slidesPerView={6}
        breakpoints={{
          1280: {
            slidesPerView: 8,
          },
        }}
      >
        <SwiperSlide>
          <AmazingOfferHDesk className="w-full flex-col items-start " />
        </SwiperSlide>
        {products.map((product, index) => (
          <SwiperSlide
            key={product.id}
            className={`bg-white flex cursor-pointer w-full flex-col items-start justify-center p-2 gap-1
            ${index === 0 ? " rounded-r-lg" : ""} ${
              index === products.length - 1 ? "rounded-l-lg" : ""
            }`}
          >
            <img
              src={product.image.url}
              alt={product.title}
              className="w-full rounded-md inline-block min-w-[130px]"
            />
            <p className="line-clamp-2 h-10 text-xs">{product.title}</p>
            <div className="flex flex-col items-stretch p-2">
              <div className="text-black flex flex-row justify-between  text-xs">
                <span className="bg-digikalaPrimary text-white px-1.5   rounded-full">
                  % {product.price.discount_percent}
                </span>
                <div>
                  {product.price.selling_price}
                  <Toman />
                </div>
              </div>
              <div className="text-xs flex justify-end ">
                <div className="line-clamp-2 text-gray-300 line-through h-">
                  {product.price.rrp_price}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
