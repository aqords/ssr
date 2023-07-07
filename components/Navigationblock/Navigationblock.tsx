import React, { useRef } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import ScrollToggle from "../../utils/hooks/ScrollToggle";
import useScrollClassChange from "../../utils/hooks/useScrollChange";
import InfoCard from "../UI/InfoCard.tsx/InfoCard";
import { NavigationblockData } from "../Constants/NavigationblockConst";

const Navigationblock = () => {
  const { t } = useTranslation();

  const currentLocation = useRouter().pathname.split("/");

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
    elementRefs: [elementRef, elementRef2, elementRef3, elementRef4],
    className: "original",
  });

  return (
    <div className="container py-[30px] md:py-[100px]">
      {!currentLocation.includes("howitworks") && (
        <div
          ref={elementRef4}
          className={isScrolled["el-4"] ? "el-4 visible" : "el-4 original"}
        >
          <InfoCard
            title={NavigationblockData[0].title}
            desc={t(`${NavigationblockData[0].desc}`)}
            href={NavigationblockData[0].href}
            bgLight={NavigationblockData[0].bgLight}
          />
          <div
            ref={elementRef6}
            className={isScrolled["el-6"] ? "el-6 visible" : "el-6 original"}
          >
            <span className="block h-[1px] w-full span-gradient my-[60px]"></span>
          </div>
        </div>
      )}
      <div
        ref={elementRef3}
        className={isScrolled["el-3"] ? "el-3 visible" : "el-3 original"}
      >
        <div
          className={`${
            !currentLocation.includes("manifesto") &&
            "flex flex-wrap lg:flex-nowrap gap-[16px]"
          } gap-[18px] flex-wrap`}
        >
          {!currentLocation.includes("manifesto") && (
            <InfoCard
              title={NavigationblockData[1].title}
              desc={t(`${NavigationblockData[1].desc}`)}
              href={NavigationblockData[1].href}
              flex={"flex flex-col justify-between overflow-hidden"}
              img={NavigationblockData[1].url}
              imgStyle={
                "relative  top-[-20px] left-[105px]  md:left-[240px] lg:left-[60px]"
              }
              imgWrapper={
                "w-[274px] h-[328px] sm:w-[410px] sm:h-[348px] mt-[20px] ml-[19px] scale-[1.7] sm:scale-[1.2]"
              }
            />
          )}
          <div className={`flex flex-col gap-[18px] flex-wrap`}>
            {!currentLocation.includes("whitepaper") && (
              <InfoCard
                title={NavigationblockData[2].title}
                desc={t(`${NavigationblockData[2].desc}`)}
                href={NavigationblockData[2].href}
              />
            )}
            {!currentLocation.includes("roadmap") && (
              <InfoCard
                title={NavigationblockData[3].title}
                desc={t(`${NavigationblockData[3].desc}`)}
                href={NavigationblockData[3].href}
              />
            )}
          </div>
        </div>
      </div>
      <div
        ref={elementRef5}
        className={isScrolled["el-5"] ? "el-5 visible" : "el-5 original"}
      >
        <span className="hidden md:block h-[1px] w-full span-gradient my-[60px]"></span>
      </div>
      <div
        ref={elementRef2}
        className={isScrolled["el-2"] ? "el-2 visible" : "el-2 original"}
      >
        {!currentLocation.includes("about") && (
          <InfoCard
            title={NavigationblockData[4].title}
            desc={t(`${NavigationblockData[4].desc}`)}
            img={NavigationblockData[4].url}
            href={NavigationblockData[4].href}
            imgStyle={
              "relative left-[-70px] top-[-60px] max-w-none md:relative md:left-[385px] lg:left-[0px] lg:top-[0px]"
            }
            imgWrapper={
              "w-[274px] md:w-[574px] h-[318px] scale-[0.85] lg:scale-[1]"
            }
            flex={"flex flex-col items-end md:items-start  lg:flex-row-reverse"}
            bgLight={NavigationblockData[4].bgLight}
          />
        )}
        {!currentLocation.includes("team") && (
          <>
            <span className="block h-[0px] my-[60px]"></span>
            <InfoCard
              title={NavigationblockData[5].title}
              desc={t(`${NavigationblockData[5].desc}`)}
              bgLight={NavigationblockData[5].bgLight}
              href={NavigationblockData[5].href}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Navigationblock;
