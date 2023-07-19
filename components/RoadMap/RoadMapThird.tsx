import Image from "next/image";
import React, { useRef } from "react";
import { useTranslation } from "next-i18next";
import ScrollToggle from "../../utils/hooks/ScrollToggle";
import useScrollClassChange from "../../utils/hooks/useScrollChange";
import Button from "../UI/Button/Button";
import opacvector from "../../public/assets/images/opacvector.svg";
import fullline2 from "../../public/assets/images/fullline2.svg";

const RoadMapThird = () => {
  const { t } = useTranslation();

  const isScrolled = ScrollToggle({
    targetClasses: ["el-15", "el-16", "el-17", "el-18", "el-19", "el-20"],
    visibleClass: "visible",
  });

  const elementRef15 = useRef<HTMLDivElement>(null);
  const elementRef16 = useRef<HTMLDivElement>(null);
  const elementRef17 = useRef<HTMLDivElement>(null);
  const elementRef18 = useRef<HTMLDivElement>(null);
  const elementRef19 = useRef<HTMLDivElement>(null);
  const elementRef20 = useRef<HTMLDivElement>(null);

  useScrollClassChange({
    elementRefs: [
      elementRef15,
      elementRef16,
      elementRef17,
      elementRef18,
      elementRef19,
      elementRef20,
    ],
    className: "original",
  });
  return (
    <div className="relative">
      <div
        ref={elementRef15}
        className={`absolute top-[-60px] sml:top-[-170px] sm:top-[-175px] md:top-[-120px] w-[3px] h-[60%] ${
          isScrolled["el-15"] ? "el-15 visible" : "el-15 original"
        }`}
      >
        <Image src={fullline2} alt="fullline" />
      </div>
      <div
        ref={elementRef16}
        className={`absolute z-[-1] top-[10%] sml:top-[11%] smx:top-[5%] sm:top-[5%] md:top-[11%] ${
          isScrolled["el-16"] ? "el-16 visible" : "el-16 original"
        }`}
      >
        <Image src={opacvector} alt="linevector1" />
      </div>
      <div
        ref={elementRef17}
        className={`absolute z-[-1] top-[49%] sml:top-[49%] smx:top-[45%] sm:top-[49%] md:top-[50%] lg:top-[49%] ${
          isScrolled["el-17"] ? "el-17 visible" : "el-17 original"
        }`}
      >
        <Image src={opacvector} alt="linevector1" />
      </div>

      <div className="ml-[36px] sm:ml-[90px]">
        <div
          ref={elementRef18}
          className={` ${
            isScrolled["el-18"] ? "el-18 visible" : "el-18 original"
          }`}
        >
          <h1 className="leading-normal md:leading-[58px] md:text-[48px] text-[32px] font-bold mb-[85px] lg:mb-[120px] md:mb-[60px] tracking-[-1.5px] ">
            {t("roadmap_text12")}
          </h1>
        </div>
        <div className="mb-[165px] sm:mb-[360px]">
          <div
            ref={elementRef19}
            className={` ${
              isScrolled["el-19"] ? "el-19 visible" : "el-19 original"
            }`}
          >
            <div className="mb-[35px] sm:mb-[85px] lg:mb-[65px]">
              <Button
                outsideGradient="mb-[26px] rounded-full  bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px] w-[121px] h-[25px]"
                insideGradient="rounded-full bg-gradient-to-r from-[#27241d]  to-[#252118] p-[1px] justify-center items-center"
              >
                <p className="text-[12px]">{t("roadmap_text13")}</p>
              </Button>

              <div className="w-[316px] md:w-[615px] lg:w-[716px]">
                <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
                  {t("roadmap_text14")}
                </h2>
                <h3 className="font-man  mb-[40px] text-[16px] md:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[315px] md:w-[615px] lg:w-[716px]">
                  {t("roadmap_text15")}
                </h3>
                <p className="font-man text-[#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
                  {t("roadmap_text16")}
                </p>
              </div>
            </div>
          </div>
          <div
            ref={elementRef20}
            className={` ${
              isScrolled["el-20"] ? "el-20 visible" : "el-20 original"
            }`}
          >
            <div className="mb-[35px] sm:mb-[85px] lg:mb-[65px]">
              <Button
                outsideGradient="mb-[26px] rounded-full  bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px] w-[121px] h-[25px]"
                insideGradient="rounded-full bg-gradient-to-r from-[#27241d]  to-[#252118] p-[1px] justify-center items-center"
              >
                <p className="text-[12px]">{t("roadmap_text13")}</p>
              </Button>

              <div className="w-[316px] md:w-[615px] lg:w-[716px]">
                <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
                  {t("roadmap_text244")}
                </h2>
                <h3 className="font-man  mb-[40px] text-[16px] md:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[315px] sm:w-[716px]">
                  {t("roadmap_text246")}
                </h3>
                <p className="font-man text-[#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
                  {t("roadmap_text247")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMapThird;
