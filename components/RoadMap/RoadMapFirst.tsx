import Image from "next/image";
import React, { useRef } from "react";
import { useTranslation } from "next-i18next";
import ScrollToggle from "../../utils/hooks/ScrollToggle";
import useScrollClassChange from "../../utils/hooks/useScrollChange";
import fullline1 from "../../public/assets/images/fullline1.svg";
import Button from "../UI/Button/Button";
import linevector1 from "../../public/assets/images/linevector1.svg";

const RoadMapFirst = () => {
  const { t } = useTranslation();

  const isScrolled = ScrollToggle({
    targetClasses: ["el-1", "el-2", "el-3", "el-4", "el-5", "el-6"],
    visibleClass: "visible",
  });

  const elementRef = useRef<HTMLDivElement>(null);
  const elementRef2 = useRef<HTMLDivElement>(null);
  const elementRef3 = useRef<HTMLDivElement>(null);
  const elementRef4 = useRef<HTMLDivElement>(null);
  const elementRef5 = useRef<HTMLDivElement>(null);
  const elementRef6 = useRef<HTMLDivElement>(null);

  useScrollClassChange({
    elementRefs: [
      elementRef,
      elementRef2,
      elementRef3,
      elementRef4,
      elementRef5,
      elementRef6,
    ],
    className: "original",
  });
  return (
    <div className="relative ">
      <div
        ref={elementRef}
        className={`absolute z-[-100] top-[-60px] sml:top-[-170px] sm:top-[-175px] md:top-[-120px] w-[3px] h-[120%] ${
          isScrolled["el-1"] ? "el-1 visible" : "el-1 original"
        }`}
      >
        <Image src={fullline1} alt="fullline" />
      </div>
      <div
        ref={elementRef2}
        className={`absolute  top-[7%] sml:top-[2%] sm:top-[3%] md:top-[41%]  ${
          isScrolled["el-2"] ? "el-2 visible" : "el-2 original"
        }`}
      >
        <Image src={linevector1} alt="linevector1" />
      </div>
      <div
        ref={elementRef3}
        className={`absolute top-[40%] sml:top-[37%] sm:top-[39%] md:top-[8%] ${
          isScrolled["el-3"] ? "el-3 visible" : "el-3 original"
        }`}
      >
        <Image src={linevector1} alt="linevector1" />
      </div>
      <div
        ref={elementRef4}
        className={`absolute top-[67%] sml:top-[66%] sm:top-[69%] md:top-[70%] lg:top-[69%] ${
          isScrolled["el-4"] ? "el-4 visible" : "el-4 original"
        }`}
      >
        <Image src={linevector1} alt="linevector1" />
      </div>

      <div className="relative ml-[36px] sm:ml-[90px]">
        <h1 className="leading-normal md:leading-[58px] md:text-[48px] text-[32px] font-bold mb-[80px] md:mb-[120px] tracking-[-1.5px] ">
          {t("roadmap_text1")}
        </h1>
        <div className="mb-[165px] sm:mb-[360px]">
          <div className="mb-[85px] sm:mb-[135px] lg:mb-[120px]">
            <Button
              outsideGradient="mb-[26px] rounded-full  bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px] w-[121px] h-[25px]"
              insideGradient="rounded-full bg-black p-[1px] justify-center items-center"
            >
              <p className="text-[12px]">{t("roadmap_text2")}</p>
            </Button>

            <div className="w-[316px] md:w-[615px] lg:w-[716px]">
              <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
                {t("roadmap_text3")}
              </h2>
              <h3 className="font-man  mb-[40px] text-[16px] md:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[316px] md:w-[615px] lg:w-[716px]">
                {t("roadmap_text4")}
              </h3>
              <p className="font-man text-[#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
                {t("roadmap_text5")}
              </p>
            </div>
          </div>
          <div
            ref={elementRef5}
            className={` ${
              isScrolled["el-5"] ? "el-5 visible" : "el-5 original"
            }`}
          >
            <div className="mb-[85px] sm:mb-[135px] lg:mb-[120px]">
              <Button
                outsideGradient="mb-[26px] rounded-full  bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px] w-[121px] h-[25px]"
                insideGradient="rounded-full bg-black p-[1px] justify-center items-center"
              >
                <p className="text-[12px]">{t("roadmap_text2")}</p>
              </Button>

              <div className="w-[316px] md:w-[615px] lg:w-[716px]">
                <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
                  {t("roadmap_text251")}
                </h2>
                <h3 className="font-man  mb-[40px] text-[16px] md:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[316px] sm:w-[716px]">
                  {t("roadmap_text252")}
                </h3>
                <p className="font-man text-[#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
                  {t("roadmap_text253")}
                </p>
              </div>
            </div>
          </div>
          <div
            ref={elementRef6}
            className={` ${
              isScrolled["el-6"] ? "el-6 visible" : "el-6 original"
            }`}
          >
            <div className="mb-[85px] sm:mb-[135px] lg:mb-[120px]">
              <Button
                outsideGradient="mb-[26px] rounded-full  bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px] w-[121px] h-[25px]"
                insideGradient="rounded-full bg-black p-[1px] justify-center items-center"
              >
                <p className="text-[12px]">{t("roadmap_text2")}</p>
              </Button>

              <div className="w-[316px] md:w-[615px] lg:w-[716px]">
                <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
                  {t("roadmap_text6")}
                </h2>
                <h3 className="font-man  mb-[40px] text-[16px] md:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[316px] md:w-[615px] lg:w-[716px]">
                  {t("roadmap_text10")}
                </h3>
                <p className="font-man text-[#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
                  {t("roadmap_text11")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMapFirst;
