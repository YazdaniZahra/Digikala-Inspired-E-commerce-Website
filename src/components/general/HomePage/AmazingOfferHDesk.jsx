import React from "react";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import { useQuery } from "@tanstack/react-query";
import AmazingOfferDesktopIcon from "@/assets/icons/AmazingOfferDesktopIcon";
export default function AmazingOfferHDesk({ className }) {
  const fetchAmazingOffer = async () => {
    const response = await fetch("/api/v1/widget-factory/widget/13/");
    if (!response.ok) throw new Error("error fetching data");
    const data = await response.json();
    return data?.data?.data || [];
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["amazingOffer"],
    queryFn: fetchAmazingOffer,
    staleTime: Infinity,
  });
  if (isLoading) return <p>Loading</p>;
  if (error) return <p>Error occured : {error.message}</p>;

  return (
    <div className={className}>
      <div className="flex flex-row lg:flex-col justify-between h-full pt-5 px-4 pb-3 lg:items-center w-full lg:gap-3 lg:p-0 lg:h-full">
        <AmazingOfferDesktopIcon className="hidden lg:block" />
        <div className="flex justify-center gap-2 h-6 max-h-24 lg:justify-between lg:flex-col lg:size-20">
          <img src={data.icon.url} alt={data.icon.url} />
          <img
            src={data.header_image.url}
            alt={data.header_image.url}
            className="lg:hidden"
          />
        </div>
        <div className=" text-white flex gap-1 items-center text-xs ">
          <span className="lg:hidden">همه</span>
          <span className="hidden lg:block">مشاهده همه</span>

          <ArrowIcon className="w-2 h-2" />
        </div>
      </div>
    </div>
  );
}
