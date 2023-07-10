import React, { useRef } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import BlockWithBackground from "../BlockWithBackground/BlockWithBackground";
import worldinhands from "/public/assets/images/worldinhands.jpg";
import codebg from "/public/assets/images/codebg.jpg";
import truck from "/public/assets/images/truck.jpg";
import ScrollToggle from "../../utils/hooks/ScrollToggle";
import useScrollClassChange from "../../utils/hooks/useScrollChange";

const InfoAboutblock = () => {
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
      <section className="relative">
        <div
          ref={elementRef3}
          className={`${isScrolled["el-3"] ? "el-3 visible" : "el-3 original"}`}
        >
          <div className="container relative   sm:pt-[0px] md:pt-[30px] lg:pt-[60px]  pb-[130px] lg:pb-[187px]">
            <p className="font-normal text-[16px] lg:text-[20px]  font-man  leading-[24px] md:leading-[32px] tracking-[-0.14px] mb-[30px]">
              {t("info_about_block_desc1")}
            </p>
            <p className="font-normal text-[16px] lg:text-[20px]  font-man  leading-[24px] md:leading-[32px] tracking-[-0.14px]  mb-[60px] md:mb-[80px] ">
              {t("info_about_block_desc2")}
            </p>
          </div>
        </div>

        <div
          ref={elementRef}
          className={`${isScrolled["el-1"] ? "el-1 visible" : "el-1 original"}`}
        >
          <div className="container relative top-[-170px]">
            <Image
              className="absolute   left-1/2 transform -translate-x-1/2 rounded-[20px]"
              alt="code example"
              src={codebg}
              width={1084}
              height={375}
            />
          </div>

          <div className="bg-[#19191A]">
            <div className="container  smx:pt-[60px] sm:pt-[80px]  md:pt-[160px] lg:pt-[267px]   pb-[40px]  lg:flex justify-between">
              <div className="pt-[40px] sml:pt-0">
                <p className="font-normal text-[16px] lg:text-[20px] font-man lg:max-w-[532px] leading-[24px] lg:leading-[32px] tracking-[-0.14px] mb-[30px]">
                  {t("info_about_block_desc3")}
                </p>
                <p className="font-normal  text-[16px] lg:text-[20px] font-man lg:max-w-[532px] leading-[24px] lg:leading-[32px] tracking-[-0.14px] ">
                  {t("info_about_block_desc4")}
                </p>
              </div>
              <Image
                className="hidden lg:block rounded-[20px]"
                alt="world in hands"
                src={worldinhands}
                sizes="50vw"
                width={440}
                height={576}
              />
            </div>
          </div>
        </div>

        <BlockWithBackground
          img={truck}
          imgStyle="absolute  min-h-[807px] min-w-[1280px] top-0 left-0  lg:right-0  m-auto object-cover z-[-10]"
          title={t("info_about_block_desc5")}
          desc1={t("info_about_block_desc6")}
          blockStyle="relative h-[478px] md:h-[810px] overflow-hidden py-[40px] flex"
        />
      </section>
    </>
  );
};

export default InfoAboutblock;
