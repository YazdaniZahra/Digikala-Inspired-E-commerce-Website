import { menuItems } from "@/constants/menuItems";
import LocationSelectorLg from "./LocationSelectorLg";

export default function NavBar() {
  const categoryItem = menuItems[0];
  const middleItems = menuItems.slice(1, -2);
  const extraItems = menuItems.slice(-2, 7);
  return (
    <div className="hidden lg:flex  items-center justify-between px-4">
      <div className="flex items-center justify-between text-graymidark text-xs gap-3 text-nowrap font-normal ">
        <div className="flex items-center text-base font-bold gap-1  pl-2 cursor-pointer">
          <div className="text-graydark">
            <categoryItem.icon />
          </div>
          <span className="text-grayslate">{categoryItem.label}</span>
        </div>
        <div className="flex gap-3 border-x-1 px-3 border-grayMid ">
          {middleItems.map((middleItem) => (
            <div key={middleItem.id}>
              <div className="flex flex-row items-center gap-1 cursor-pointer xl:p-1">
                <div className="text-grayMedium">
                  <middleItem.icon />
                </div>
                <span>{middleItem.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3 justify-between">
          {extraItems.map((extraItem) => (
            <div key={extraItem.id} className="cursor-pointer">
              {extraItem.label}
            </div>
          ))}
        </div>
      </div>
      <LocationSelectorLg />
    </div>
  );
}
