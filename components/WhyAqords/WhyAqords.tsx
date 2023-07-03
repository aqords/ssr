import React, { useRef } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import WhyAqordsList from "./WhyAqordsList";
import ScrollToggle from "../../utils/hooks/ScrollToggle";
import useScrollClassChange from "../../utils/hooks/useScrollChange";
import { renderObject } from "../Constants/WhyAqordsItems";
import truck from "../../public/assets/images/truck.png";

interface WhyAqordsProps {
  itemsArray: renderObject[];
}

const WhyAqords = ({ itemsArray }: WhyAqordsProps) => {
  const { t } = useTranslation();
  const isScrolled = ScrollToggle({
    targetClasses: ["el-1", "el-2", "el-3"],
    visibleClass: "visible",
  });

  const elementRef = useRef<HTMLDivElement>(null);
  const elementRef2 = useRef<HTMLDivElement>(null);
  const elementRef3 = useRef<HTMLDivElement>(null);

  useScrollClassChange({
    elementRefs: [elementRef, elementRef2, elementRef3],
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

      <section className="relative overflow-hidden">
        <Image
          className="absolute  min-h-[807px] min-w-[1280px] top-0 left-0  lg:right-0  m-auto object-cover"
          src={truck}
          alt="truck"
        />
        <div className="container">
          <div className="  py-[22%] w-full md:max-w-[530px]">
            <div
              ref={elementRef2}
              className={isScrolled["el-2"] ? "el-2 visible" : "el-2 original"}
            >
              <h3 className="tracking-[-1.5px]md:max-w-[537px] text-2xl leading-10 md:leading-[59px] font-bold  md:text-[48px] mb-[30px]">
                {t("why_aqords_desc2")}
              </h3>
            </div>
            <div
              ref={elementRef3}
              className={isScrolled["el-3"] ? "el-3 visible" : "el-3 original"}
            >
              <p className=" tracking-[-0.14px] font-man  font-normal md:text-[20px] text-base leading-[24px]  md:leading-[32px] ">
                {t("why_aqords_desc3")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyAqords;
