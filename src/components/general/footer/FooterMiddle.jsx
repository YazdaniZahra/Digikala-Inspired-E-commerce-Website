import AccordionMenu from "./AccordionMenu";
import { accordionMenu } from "./accordionMenu";

export default function FooterMiddle() {
  return (
    <div className="flex flex-col ">
      {accordionMenu.map((accordionMenuItems) => {
        return (
          <div className="py-4 px-2 cursor-pointer border-b border-grayMid text-sm">
            <AccordionMenu
              key={accordionMenuItems.title}
              title={accordionMenuItems.title}
              items={accordionMenuItems.items}
            />
          </div>
        );
      })}
    </div>
  );
}
