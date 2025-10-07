import { navItems } from "@/constants/navItems";

import React from "react";

export default function SuperAppNavBar() {
  return (
    <div className="pt-2 justify-between px-4 flex gap-2 overflow-x-auto hide-scrollbar lg:hidden">
      {navItems.map((navItem) => (
        <div
          key={navItem.id}
          className={`flex flex-row gap-1 h-9 text-xs sm:text-sm  whitespace-nowrap justify-center items-center px-2  cursor-pointer rounded-md shrink-0 grow ${
            navItem.id === 2
              ? "bg-digikalaPrimarysec text-white font-medium"
              : "bg-graynav font-normal"
          }`}
        >
          <img src={navItem.image} alt={navItem.title} className="w-iconbase" />
          {navItem.id !== 1 && <span>{navItem.title}</span>}
        </div>
      ))}
    </div>
  );
}
