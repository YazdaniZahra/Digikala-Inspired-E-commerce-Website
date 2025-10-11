import ImageSearch from "@/components/icons/ImageSearch";
import SearchIcon from "@/components/icons/SearchIcon";
import PersianDigikalaLogo from "@/components/icons/PersianDigikalaLogo";

export default function SearchBar({ className = "" }) {
  return (
    <div
      className="w-full lg:max-w-xl  bg-graySoft  flex flex-row justify-between 
     items-center rounded-lg px-2 lg:px-8
     "
    >
      <div className="flex flex-row items-center">
        <div>
          <SearchIcon className="w-5 h-iconbase text-grayMedium cursor-pointer " />
        </div>
        <span className="text-grayMedium px-2 lg:px-4 text-sm font-bold text-">
          جستجو <span className="lg:hidden">در </span>
        </span>
        <PersianDigikalaLogo className="text-digikalaPrimary w-16 h-4 mt-1 -mr-1 lg:hidden" />
      </div>
      <div className="flex justify-center items-center">
        <ImageSearch className="text-violetPrimary w-iconbase h-iconbase cursor-pointer lg:hidden" />
      </div>
    </div>
  );
}
