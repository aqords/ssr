import React, { useRef } from "react";
import ScrollToggle from "../../utils/hooks/ScrollToggle";
import useScrollClassChange from "../../utils/hooks/useScrollChange";
import { useTranslation } from "next-i18next";

const WhyAqordsItem = ({ item }: any) => {
  const { t } = useTranslation();

  const isScrolled = ScrollToggle({
    targetClasses: ["el1"],
    visibleClass: "visible",
    originalClass: "original",
  });

  const elementRef = useRef<HTMLDivElement>(null);

  useScrollClassChange({
    elementRefs: [elementRef],
    className: "original",
  });

  return (
    <li className=" pt-[60px] md:pt-[130px]">
      <div
        ref={elementRef}
        className={isScrolled["el1"] ? "el1 visible" : "el1 original"}
      >
        <div className="md:mb-[60px] mb-[30px]">
          <img
            src={item.topicon.src}
            className=" tracking-[-0.04em] font-light text-6xl w-[16px] h-[30px] md:w-[35px] md:h-[48px]
          "
            alt="number icon"
          />
        </div>
        <div className="flex items-center gap-5 md:gap-10 mb-[30px] md:mb-[55px]">
          <img
            src={item.icon.src}
            alt="icon"
            className="w-[38px] h-[40px] md:w-[76px] md:h-[78px]"
          />

          <h3 className="text-2xl md:text-[40px]  font-bold text-white  leading-[64px] tracking-[-0.05rem] ">
            {t(`${item.title}`)}
          </h3>
        </div>
        <p className=" font-man mb-[25px] font-normal md:mb-[38px] md:text-[20px] tracking-[-0.22px]">
          {t(`${item.description}`)}
        </p>
        <p className="text-gray font-man font-normal text-base">
          {t(`${item.text}`)}
        </p>
      </div>
    </li>
  );
};

export default WhyAqordsItem;
