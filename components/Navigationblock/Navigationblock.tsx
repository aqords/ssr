import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import ScrollToggle from "../../utils/hooks/ScrollToggle";
import useScrollClassChange from "../../utils/hooks/useScrollChange";
import InfoCard from "../UI/InfoCard.tsx/InfoCard";
import { NavigationblockData } from "../Constant/NavigationblockConst";

const Navigationblock = () => {
  const currentLocation = useRouter().pathname.split("/");

  const isScrolled = ScrollToggle({
    targetClasses: ["el-1", "el-2", "el-3", "el-4", "el-5", "el-6"],
    visibleClass: "visible",
    originalClass: "original",
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
    <div className="container">
      {currentLocation.includes("howitworks") ? (
        ""
      ) : (
        <div
          ref={elementRef4}
          className={isScrolled["el-4"] ? "el-4 visible" : "el-4 original"}
        >
          <InfoCard
            title={NavigationblockData[0].title}
            desc={NavigationblockData[0].desc}
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
        <div className="flex flex-wrap lg:flex-nowrap gap-[16px]">
          {currentLocation.includes("manifesto") ? (
            ""
          ) : (
            <InfoCard
              title={NavigationblockData[1].title}
              desc={NavigationblockData[1].desc}
              img={NavigationblockData[1].url}
              imgStyle={
                "relative top-[-20px] left-[105px]  md:left-[260px] lg:left-[60px]"
              }
              imgWrapper={
                "w-[274px] h-[318px] sm:w-auto sm:h-auto scale-[1.7] sm:scale-[1]"
              }
            />
          )}
          <div
            className={`flex ${
              currentLocation.includes("manifesto") ? "flex-row" : "flex-col"
            } gap-[18px]`}
          >
            {currentLocation.includes("whitepaper") ? (
              ""
            ) : (
              <InfoCard
                title={NavigationblockData[2].title}
                desc={NavigationblockData[2].desc}
              />
            )}
            {currentLocation.includes("roadmap") ? (
              ""
            ) : (
              <InfoCard
                title={NavigationblockData[3].title}
                desc={NavigationblockData[3].desc}
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
        {currentLocation.includes("about") ? (
          ""
        ) : (
          <InfoCard
            title={NavigationblockData[4].title}
            desc={NavigationblockData[4].desc}
            img={NavigationblockData[4].url}
            imgStyle={
              "relative left-[-70px] top-[-60px] max-w-none md:relative md:left-[385px] lg:left-[-135px] lg:top-[0px]"
            }
            imgWrapper={"w-[274px] h-[318px] scale-[0.85] lg:scale-[1]"}
            flex={"flex flex-col items-end md:items-start  lg:flex-row-reverse"}
            bgLight={NavigationblockData[4].bgLight}
          />
        )}
        {currentLocation.includes("team") ? (
          ""
        ) : (
          <>
            <span className="block h-[0px] my-[60px]"></span>
            <InfoCard
              title={NavigationblockData[5].title}
              desc={NavigationblockData[5].desc}
              bgLight={NavigationblockData[5].bgLight}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Navigationblock;
