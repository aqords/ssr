import React, { useRef } from "react";
import { useTranslation } from "next-i18next";

import WhyAqordsList from "./WhyAqordsList";
import ScrollToggle from "../../utils/hooks/ScrollToggle";
import useScrollClassChange from "../../utils/hooks/useScrollChange";
import { renderObject } from "../Constants/WhyAqordsItems";
import truck from "../../public/assets/images/truck.jpg";
import BlockWithBackground from "../BlockWithBackground/BlockWithBackground";

interface WhyAqordsProps {
  itemsArray: renderObject[];
}

const WhyAqords = ({ itemsArray }: WhyAqordsProps) => {
  const { t } = useTranslation();

  const isScrolled = ScrollToggle({
    targetClasses: ["el-1"],
    visibleClass: "visible",
  });

  const elementRef = useRef<HTMLDivElement>(null);

  useScrollClassChange({
    elementRefs: [elementRef],
    className: "original",
  });

  return (
    <>
      <section className="bg-second">
        <div className="container">
          <div className="pt-[100px] sm:pt-[150px] md:pt-[320px]">
            <div
              ref={elementRef}
              className={isScrolled["el-1"] ? "el-1 visible" : "el-1 original"}
            >
              <h2 className="  font-bold text-2xl md:text-[48px]  mb-[43px] tracking-[-1.5px]">
                {t("why_aqords_title1")}
              </h2>
              <p className="font-normal  text-base md:text-lg font-man max-w-[790px] leading-6 md:leading-8 tracking-[-0.42px] ">
                {t("why_aqords_desc1")}
              </p>
            </div>
          </div>
          <WhyAqordsList itemsArray={itemsArray} />
        </div>
      </section>

      <BlockWithBackground
        img={truck}
        imgStyle="absolute  min-h-[807px] min-w-[1280px] top-0 left-0  lg:right-0  m-auto object-cover z-[-10]"
        title={t("why_aqords_desc2")}
        desc1={t("why_aqords_desc3")}
        blockStyle="relative h-[478px] md:h-[810px] overflow-hidden py-[40px] flex"
      />
    </>
  );
};

export default WhyAqords;
