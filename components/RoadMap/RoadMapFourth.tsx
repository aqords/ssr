import Image from "next/image";
import React, { useRef } from "react";
import { useTranslation } from "next-i18next";
import ScrollToggle from "../../utils/hooks/ScrollToggle";
import useScrollClassChange from "../../utils/hooks/useScrollChange";
import Button from "../UI/Button/Button";
import opacvector from "../../public/assets/images/opacvector.svg";
import fullline2 from "../../public/assets/images/fullline2.svg";
import NodeCard from "../UI/InfoCard.tsx/NodeCard";

const RoadMapFourth = () => {
  const { t } = useTranslation();

  const isScrolled = ScrollToggle({
    targetClasses: [
      "el-21",
      "el-22",
      "el-23",
      "el-24",
      "el-25",
      "el-26",
      "el-27",
      "el-28",
    ],
    visibleClass: "visible",
  });

  const elementRef21 = useRef<HTMLDivElement>(null);
  const elementRef22 = useRef<HTMLDivElement>(null);
  const elementRef23 = useRef<HTMLDivElement>(null);
  const elementRef24 = useRef<HTMLDivElement>(null);
  const elementRef25 = useRef<HTMLDivElement>(null);
  const elementRef26 = useRef<HTMLDivElement>(null);
  const elementRef27 = useRef<HTMLDivElement>(null);
  const elementRef28 = useRef<HTMLDivElement>(null);

  useScrollClassChange({
    elementRefs: [
      elementRef21,
      elementRef22,
      elementRef23,
      elementRef24,
      elementRef25,
      elementRef26,
      elementRef27,
      elementRef28,
    ],
    className: "original",
  });
  return (
    <div className="relative">
      <div
        ref={elementRef21}
        className={`absolute  top-[-60px] sml:top-[-170px] sm:top-[-175px] md:top-[-120px] w-[3px] h-[110%] ${
          isScrolled["el-21"] ? "el-21 visible" : "el-21 original"
        }`}
      >
        <Image src={fullline2} alt="fullline" />
      </div>
      <div
        ref={elementRef22}
        className={`absolute z-[-1] top-[5%] sml:top-[2%] sm:top-[2%] md:top-[7%]  ${
          isScrolled["el-22"] ? "el-22 visible" : "el-22 original"
        }`}
      >
        <Image src={opacvector} alt="linevector1" />
      </div>
      <div
        ref={elementRef23}
        className={`absolute z-[-1] top-[26%] sml:top-[25%] sm:top-[30%] md:top-[31%] lg:top-[30%] ${
          isScrolled["el-23"] ? "el-23 visible" : "el-23 original"
        }`}
      >
        <Image src={opacvector} alt="linevector1" />
      </div>
      <div className="ml-[36px] sm:ml-[90px]">
        <div
          ref={elementRef24}
          className={`${
            isScrolled["el-24"] ? "el-24 visible" : "el-24 original"
          }`}
        >
          <h1 className="leading-normal md:leading-[58px] md:text-[48px] text-[32px] font-bold mb-[80px] md:mb-[123px] tracking-[-1.5px] ">
            {t("roadmap_text20")}
          </h1>
        </div>

        <div className="mb-[120px]">
          <div
            ref={elementRef25}
            className={` ${
              isScrolled["el-25"] ? "el-25 visible" : "el-25 original"
            }`}
          >
            <div className="mb-[40px] sm:mb-[110px] md:mb-[85px] lg:mb-[55px]">
              <Button
                outsideGradient="mb-[26px] rounded-full  bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px] w-[121px] h-[25px]"
                insideGradient="rounded-full bg-gradient-to-r from-[#27241d]  to-[#252118] p-[1px] justify-center items-center"
              >
                <p className="text-[12px]">{t("roadmap_text13")}</p>
              </Button>

              <div className="w-[316px] md:w-[615px] lg:w-[716px]">
                <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
                  {t("roadmap_text21")}
                </h2>
                <h3 className="font-man  mb-[40px] text-[16px] md:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[315px] md:w-[615px] lg:w-[716px]">
                  {t("roadmap_text22")}
                </h3>
                <p className="font-man text-[#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
                  {t("roadmap_text23")}
                </p>
              </div>
            </div>
          </div>
          <div
            ref={elementRef26}
            className={` ${
              isScrolled["el-26"] ? "el-26 visible" : "el-26 original"
            }`}
          >
            <div className="mb-[40px] sm:mb-[110px] md:mb-[85px] lg:mb-[55px]">
              <Button
                outsideGradient="mb-[26px] rounded-full  bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px] w-[121px] h-[25px]"
                insideGradient="rounded-full bg-gradient-to-r from-[#27241d]  to-[#252118] p-[1px] justify-center items-center"
              >
                <p className="text-[12px]">{t("roadmap_text13")}</p>
              </Button>

              <div className="w-[316px] md:w-[615px] lg:w-[716px]">
                <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
                  {t("roadmap_text245")}
                </h2>
                <h3 className="font-man  mb-[40px] text-[16px] md:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[315px] sm:w-[716px]">
                  {t("roadmap_text248")}
                </h3>
                <p className="font-man text-[#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
                  {t("roadmap_text249")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={elementRef27}
          className={` ${
            isScrolled["el-27"] ? "el-27 visible" : "el-27 original"
          }`}
        >
          <p className="block  font-man  mb-[40px] text-[16px] md:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[315px] sm:w-[716px] ">
            {t("roadmap_text250")}
          </p>
        </div>
      </div>
      <div
        ref={elementRef28}
        className={` ${
          isScrolled["el-28"] ? "el-28 visible" : "el-28 original"
        }`}
      >
        <NodeCard
          margin="ml-[18px] sm:ml-[90px]"
          width="max-w-[716px]"
          title={t(`${"wpnodecard_text1"}`)}
          desc1={t(`${"roadmap_text36"}`)}
          desc2={t(`${"roadmap_text37"}`)}
        />
      </div>
    </div>
  );
};

export default RoadMapFourth;
