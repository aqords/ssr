import Image from "next/image";
import React, { useRef } from "react";
import { useTranslation } from "next-i18next";

import NodeCard from "../UI/InfoCard.tsx/NodeCard";
import ScrollToggle from "../../utils/hooks/ScrollToggle";
import useScrollClassChange from "../../utils/hooks/useScrollChange";
import fullline1 from "../../public/assets/images/fullline1.svg";
import fullline2 from "../../public/assets/images/fullline2.svg";
import linevector1 from "../../public/assets/images/linevector1.svg";
import bgvector from "../../public/assets/images/bgvector.svg";
import opacvector from "../../public/assets/images/opacvector.svg";
import { thirdphase, fourthphase } from "../Constants/RoadMapTexts";
import Button from "../UI/Button/Button";

const RoadMap = () => {
  const { t } = useTranslation();

  const isScrolled = ScrollToggle({
    targetClasses: [
      "el-1",
      "el-2",
      "el-3",
      "el-4",
      "el-5",
      "el-6",
      "el-7",
      "el-8",
      "el-9",
      "el-10",
      "el-11",
      "el-12",
      "el-13",
      "el-14",
      "el-15",
      "el-16",
      "el-17",
      "el-18",
      "el-19",
      "el-20",
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

  const elementRef = useRef<HTMLDivElement>(null);
  const elementRef2 = useRef<HTMLDivElement>(null);
  const elementRef3 = useRef<HTMLDivElement>(null);
  const elementRef4 = useRef<HTMLDivElement>(null);
  const elementRef5 = useRef<HTMLDivElement>(null);
  const elementRef6 = useRef<HTMLDivElement>(null);
  const elementRef7 = useRef<HTMLDivElement>(null);
  const elementRef8 = useRef<HTMLDivElement>(null);
  const elementRef9 = useRef<HTMLDivElement>(null);
  const elementRef10 = useRef<HTMLDivElement>(null);
  const elementRef11 = useRef<HTMLDivElement>(null);
  const elementRef12 = useRef<HTMLDivElement>(null);
  const elementRef13 = useRef<HTMLDivElement>(null);
  const elementRef14 = useRef<HTMLDivElement>(null);
  const elementRef15 = useRef<HTMLDivElement>(null);
  const elementRef16 = useRef<HTMLDivElement>(null);
  const elementRef17 = useRef<HTMLDivElement>(null);
  const elementRef18 = useRef<HTMLDivElement>(null);
  const elementRef19 = useRef<HTMLDivElement>(null);
  const elementRef20 = useRef<HTMLDivElement>(null);
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
      elementRef,
      elementRef2,
      elementRef3,
      elementRef4,
      elementRef5,
      elementRef6,
      elementRef7,
      elementRef8,
      elementRef9,
      elementRef10,
      elementRef11,
      elementRef12,
      elementRef13,
      elementRef14,
      elementRef15,
      elementRef16,
      elementRef17,
      elementRef18,
      elementRef19,
      elementRef20,
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
    <div className="py-[120px] max-w-[806px]">
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
                    {t("roadmap_text6")}
                  </h2>
                  <h3 className="font-man  mb-[40px] text-[16px] md:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[316px] sm:w-[716px]">
                    {t("roadmap_text10")}
                  </h3>
                  <p className="font-man text-[#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
                    {t("roadmap_text11")}
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
                    {t("roadmap_text9")}
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
    </div>
  );
};

export default RoadMap;
