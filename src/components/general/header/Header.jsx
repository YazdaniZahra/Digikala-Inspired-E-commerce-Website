import CartIcon from "@/components/icons/CartIcon";
import PersianSmileLogo from "@/components/icons/PersianSmileLogo";

import NavBar from "./NavBar";
import PromotionBar from "./PromotionBar";
import SuperAppNavBar from "./SuperAppNavBar";
import LocationSelector from "./LocationSelector";
import SearchBar from "./SearchBar";
import AuthButton from "./AuthButton";
import Notification from "./Notification";

export default function Header() {
  return (
    <div>
      <PromotionBar />
      <SuperAppNavBar />
      <div className="flex flex-col px-2 py-3 border-b-1 border-graySoft">
        <div className="flex flex-row justify-between gap-2 w-full py-3 ">
          <div className="w-full flex flex-row justify-start">
            <PersianSmileLogo className="hidden lg:block h-8 " />
            <SearchBar />
          </div>
          <div className="flex flex-row justify-between gap-3 items-center">
            <Notification />
            <AuthButton className="hidden lg:flex" />
            <div className="border-l-08 hidden"></div>
            <CartIcon className="w-7 text-graydark hidden xl:flex" />
          </div>
        </div>
        <LocationSelector />
        <NavBar />
      </div>
    </div>
  );
}
