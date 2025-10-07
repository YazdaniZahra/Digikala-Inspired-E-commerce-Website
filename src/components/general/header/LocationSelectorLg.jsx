import LocationIcon from "@/assets/icons/LocationIcon";
import React from "react";

export default function LocationSelectorLg() {
  return (
    <div className="flex text-nowrap px-3 items-center py-1 gap-1 xl:gap-2 xl:py-2 rounded-full justify-between text-amberdark bg-amberlight text-sm font-bold cursor-pointer">
      <div className="size-4 ">
        <LocationIcon />
      </div>
      <span>شهر خود را انتخاب کنید</span>
    </div>
  );
}
