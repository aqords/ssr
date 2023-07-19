import Image from "next/image";
import React, { useRef } from "react";
import { useTranslation } from "next-i18next";
import ScrollToggle from "../../utils/hooks/ScrollToggle";
import useScrollClassChange from "../../utils/hooks/useScrollChange";
import fullline1 from "../../public/assets/images/fullline1.svg";
import Button from "../UI/Button/Button";
import linevector1 from "../../public/assets/images/linevector1.svg";
import opacvector from "../../public/assets/images/opacvector.svg";
import bgvector from "../../public/assets/images/bgvector.svg";

const RoadMapSecond = () => {
  const { t } = useTranslation();

  const isScrolled = ScrollToggle({
    targetClasses: [
      "el-7",
      "el-8",
      "el-9",
      "el-10",
      "el-11",
      "el-12",
      "el-13",
      "el-14",
    ],
    visibleClass: "visible",
  });

  const elementRef7 = useRef<HTMLDivElement>(null);
  const elementRef8 = useRef<HTMLDivElement>(null);
  const elementRef9 = useRef<HTMLDivElement>(null);
  const elementRef10 = useRef<HTMLDivElement>(null);
  const elementRef11 = useRef<HTMLDivElement>(null);
  const elementRef12 = useRef<HTMLDivElement>(null);
  const elementRef13 = useRef<HTMLDivElement>(null);
  const elementRef14 = useRef<HTMLDivElement>(null);

  useScrollClassChange({
    elementRefs: [
      elementRef7,
      elementRef8,
      elementRef9,
      elementRef10,
      elementRef11,
      elementRef12,
      elementRef13,
      elementRef14,
    ],
    className: "original",
  });
  return (
    <div className="relative">
      <div
        ref={elementRef7}
        className={`absolute top-[-60px] sml:top-[-170px] sm:top-[-175px] md:top-[-120px] w-[3px] h-[120%] ${
          isScrolled["el-7"] ? "el-7 visible" : "el-7 original"
        }`}
      >
        <Image src={fullline1} alt="fullline" />
      </div>

      <div
        ref={elementRef8}
        className={`absolute  top-[6%] sml:top-[3%] sm:top-[3%] md:top-[7%]  ${
          isScrolled["el-8"] ? "el-8 visible" : "el-8 original"
        }`}
      >
        <Image src={linevector1} alt="linevector1" />
      </div>
      <div
        ref={elementRef9}
        className={` absolute  top-[35%] sml:top-[33%] sm:top-[33%] md:top-[37%] ${
          isScrolled["el-9"] ? "el-9 visible" : "el-9 original"
        }`}
      >
        <Image src={bgvector} alt="linevector1" />
      </div>
      <div
        ref={elementRef10}
        className={`absolute top-[65%] sml:top-[64%] sm:top-[65%] md:top-[68%]  ${
          isScrolled["el-10"] ? "el-10 visible" : "el-10 original"
        }`}
      >
        <Image src={opacvector} alt="linevector1" />
      </div>

      <div className="mb-[165px] sm:mb-[363px] ml-[36px] sm:ml-[90px]">
        <div
          ref={elementRef11}
          className={` ${
            isScrolled["el-11"] ? "el-11 visible" : "el-11 original"
          }`}
        >
          <h1 className="leading-normal md:leading-[58px] md:text-[48px] text-[32px] font-bold mb-[80px] md:mb-[120px] tracking-[-1.5px]">
            {t("roadmap_text27")}
          </h1>
        </div>
        <div
          ref={elementRef12}
          className={` mb-[75px] sm:mb-[100px] md:mb-[95px] lg:mb-[120px] ${
            isScrolled["el-12"] ? "el-12 visible" : "el-12 original"
          }`}
        >
          <div className="w-[120px]">
            <div className="rounded-full mb-[26px] bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]">
              <div className=" leading-[20px] text-[12px] text-center rounded-full w-full bg-black p-[1px]">
                {t("roadmap_text2")}
              </div>
            </div>
          </div>
          <div className="max-w-[316px] lg:max-w-[716px]">
            <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
              {t("roadmap_text28")}
            </h2>
            <h3 className="font-man  mb-[30px] text-[16px] md:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] max-w-[316px] sm:max-w-[716px]">
              {t("roadmap_text29")}
            </h3>
            <p className="font-man text-[#838383]  text-[14px]  lg:text-[16px] tracking-[-0.3px] mb-[0px]">
              {t("roadmap_text30")}
            </p>
          </div>
        </div>
        <div
          ref={elementRef13}
          className={` mb-[23px] sm:mb-[140px] lg:mb-[103px] ${
            isScrolled["el-13"] ? "el-13 visible" : "el-13 original"
          }`}
        >
          <div className="w-[145px] sm:w-[120px]">
            <div className="ml-[25px] sm:ml-0 rounded-full mb-[26px] bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]">
              <div className=" leading-[20px] text-[12px] text-center rounded-full w-full bg-gradient-to-br from-[#ADA785] to-[#8D794C] p-[1px]">
                {t("roadmap_text31")}
              </div>
            </div>
          </div>
          <div className="max-w-[316px] sm:max-w-[716px]">
            <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
              {t("roadmap_text17")}
            </h2>
            <h3 className="font-man  mb-[30px] text-[16px] md:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] max-w-[316px] sm:max-w-[716px]">
              {t("roadmap_text32")}
            </h3>
            <p className="font-man text-[#838383]  text-[14px]  lg:text-[16px] tracking-[-0.3px] mb-[0px]">
              {t("roadmap_text33")}
            </p>
          </div>
        </div>
        <div
          ref={elementRef14}
          className={` w-[316px] md:w-[615px] lg:w-[716px] ${
            isScrolled["el-14"] ? "el-14 visible" : "el-14 original"
          }`}
        >
          <div className="w-[120px]">
            <Button
              outsideGradient="mb-[26px] rounded-full  bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px] w-[121px] h-[25px]"
              insideGradient="rounded-full bg-gradient-to-r from-[#27241d]  to-[#252118] p-[1px] justify-center items-center"
            >
              <p className="text-[12px]">{t("roadmap_text13")}</p>
            </Button>
          </div>
          <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
            {t("roadmap_text14")}
          </h2>
          <h3 className="font-man  mb-[40px] text-[16px] md:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] max-w-[316px] sm:max-w-[716px]">
            {t("roadmap_text34")}
          </h3>
          <p className="font-man text-[#838383]  text-[14px]  lg:text-[16px] tracking-[-0.3px] mb-[0px]">
            {t("roadmap_text35")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadMapSecond;
