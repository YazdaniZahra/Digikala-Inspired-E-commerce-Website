import Logo from "@/assets/images/footer-logo.png";
import SupportIcon from "@/components/icons/SupportIcon";
import React from "react";

export default function FooterTop() {
  return (
    <div className="flex flex-col text-sm ">
      <div className="flex flex-row justify-between border-b border-grayMid py-2">
        <div className="flex flex-row items-center gap-2">
          <div className=" bg-graySoft rounded-full flex size-10 justify-center items-center ">
            <SupportIcon className="size-6  text-graydark" />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h6>تماس با پشتیبانی</h6>
              <span className="text-grayText">۷ روز هفته، ۲۴ ساعت</span>
            </div>
          </div>
        </div>
        <div className="bg-graySoft rounded-full text-graydark flex items-center justify-center w-14 h-8">
          تماس
        </div>
      </div>
      <div className="flex flex-col py-2">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-row items-center gap-2">
            <img
              src={Logo}
              alt="footerlogo "
              className="size-10 rounded-full"
            />
            <div className="flex flex-col">
              <h6>اپلیکیشن دیجی‌کالا</h6>
              <span className="text-grayText">تجربه خرید بهتر در</span>
            </div>
          </div>
          <button className="bg-graySoft rounded-full text-graydark flex items-center justify-center w-14 h-8">
            دانلود
          </button>
        </div>
      </div>
    </div>
  );
}
