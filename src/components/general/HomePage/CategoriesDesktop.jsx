import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CategoriesDesktop() {
  const fetchcategoryItems = async () => {
    const response = await fetch("/api/v1/");
    if (!response.ok) throw new Error("error fetching data");
    const data = await response.json();
    return data?.data?.main_categories?.categories || [];
  };
  const {
    data: categoryItems = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categoryItemsDeskTop"],
    queryFn: fetchcategoryItems,
    staleTime: Infinity,
  });

  if (isLoading) return <p>Loading</p>;
  if (error) return <p>Error occured : {error.message}</p>;
  const categoryGroupedItems = [];
  for (let i = 0; i < categoryItems.length; i += 2) {
    categoryGroupedItems.push(categoryItems.slice(i, i + 2));
  }
  return (
    <div className="w-full lg:flex flex-col py-3 px-2 gap-12 hidden">
      <div className="text-3xl text-center">
        <h2>خرید بر اساس دسته‌بندی </h2>
      </div>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={6}
          breakpoints={{
            1280: {
              slidesPerView: 8,
              spaceBetween: 80,
            },
          }}
        >
          {categoryGroupedItems.map((categoryGroupedItem) => {
            return (
              <SwiperSlide key={categoryGroupedItem[0].id}>
                <div className="flex flex-col gap-6 px-1">
                  {categoryGroupedItem.map((catItem) => (
                    <div
                      key={catItem.id}
                      className="flex flex-col justify-between items-center"
                    >
                      <img src={catItem.image} alt={catItem.title} s/>
                      <div className="xl:text-nowrap">{catItem.title}</div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
