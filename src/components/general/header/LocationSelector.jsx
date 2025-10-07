import LocationIcon from "@/assets/icons/LocationIcon";
import ArrowIcon from "@/assets/icons/ArrowIcon";

export default function LocationSelector() {
  return (
    <div className=" flex flex-row pt-3 gap-2 items-center justify-start lg:hidden">
      <LocationIcon className="text-graydark w-4 h-4" />
      <span className="text-xs"> انتخاب استان و شهر</span>
      <ArrowIcon className="text-graydark w-4 h-4 " />
    </div>
  );
}
