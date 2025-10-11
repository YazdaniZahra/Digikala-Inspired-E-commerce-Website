import React from "react";
import Slider from "./Slider";
import SliderDesk from "./SliderDesk";
import Categories from "./Categories";
import CategoriesDesktop from "./CategoriesDesktop";
import AmazingOffer from "./AmazingOffers";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6 ">
      <Slider />
      <SliderDesk />
      <AmazingOffer />
      <Categories />
      <CategoriesDesktop />
    </div>
  );
}
