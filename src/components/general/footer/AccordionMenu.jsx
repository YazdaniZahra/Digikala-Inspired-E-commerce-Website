import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";
import React, { useState } from "react";

export default function AccordionMenu({ title, items }) {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);
  return (
    <div>
      <button
        className="w-full flex flex-row justify-between"
        onClick={() => setAccordionIsOpen(!accordionIsOpen)}
      >
        <span>{title}</span>
        {accordionIsOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </button>
      <div
        className={`text-sm text-graydark flex flex-col gap-3 pt-3 ${
          accordionIsOpen ? "block" : "hidden"
        }`}
      >
        {items.map((item) => (
          <div key={item.id} className="cursor-pointer">
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
