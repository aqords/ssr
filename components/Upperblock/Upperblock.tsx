import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { Routes } from "../Constants/Routes";
import ScrollToggle from "../../utils/hooks/ScrollToggle";
import useScrollClassChange from "../../utils/hooks/useScrollChange";
import AnimatedText from "../../utils/AnimatedText";
import Button from "../UI/Button/Button";
import aqordsLogo from "../../public/assets/images/Aqords-logo.svg";
import truck2 from "../../public/assets/images/truck2.png";
import truck1 from "../../public/assets/images/truck1.png";

const Upperblock = () => {
  const { t } = useTranslation();

  const isScrolled = ScrollToggle({
    targetClasses: ["el-1", "el-2"],
    visibleClass: "visible",
  });

  const elementRef = useRef<HTMLDivElement>(null);
  const elementRef2 = useRef<HTMLDivElement>(null);

  useScrollClassChange({
    elementRefs: [elementRef, elementRef2],
    className: "original",
  });

  return (
    <div className="container sm:pt-[100px] md:pt-[200px] pt-[100px] relative pb-[150px] sm:pb-[130px] md:pb-[170px] lg:pb-[270px] ">
      <section className="flex flex-col items-center mt-[35px] sm:mt-[0px]">
        <Link href={Routes[8].path}>
          <Button
            insideGradient="rounded-full bg-black"
            outsideGradient="hover:btn-hover-gradient hover:cursor-pointer rounded-full bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]"
          >
            <div className="text-[12px] mx-[41px] sm:mx-[32px] flex gap-[5px] lg:ml-[70px] lg:mr-[90px] lg:gap-[22px] lg:text-[16px]">
              <p className="text-[#838383]">{t("footer_announcing")}</p>
              <p className="font-normal"> {t("footer_readmore")}</p>
            </div>
          </Button>
        </Link>

        <Image
          sizes="50vw"
          className="mt-[120px] mb-[80px] sm:mt-[100px] sm:mb-[40px]"
          src={aqordsLogo}
          priority
          alt="AQORDS Logo"
        />

        <AnimatedText
          text="Empowering Carriers, Shippers and Freight Forwarders with Real-Time
          DEFI Payments"
          styles="text-[32px]  leading-[40px] font-[400] lg:text-[24px] max-w-[585px] h-[160px] lg:h-[69px] lg:text-center mb-[75px] sm:mb-[120px] sm:h-[100px] smx:h-[120px] tracking-[-1.5px] lg:tracking-[-0.3px]"
        />
      </section>

      <span className="block h-[1px] w-full span-gradient mt-[13px]"></span>

      <section
        ref={elementRef}
        className={isScrolled["el-1"] ? "el-1 visible" : "el-1 original"}
      >
        <h2 className="text-[32px]  leading-[40px] lg:text-[48px] font-bold tracking-[-1.5px] mb-[40px] mt-[130px]">
          {t("upper_title1")}
        </h2>
        <p className="font-man text-[16px] lg:text-[20px] lg:mb-[79px] mb-[39px]">
          {t("upper_desc1")}
        </p>
        <div className="flex justify-center gap-[35px] lg:gap-[105px] flex-wrap">
          <Image
            sizes="50vw"
            className="rounded-[20px] w-[447px] h-[auto] md:w-[532px] md:h-[352px]"
            src={truck2}
            priority
            alt="turck2"
          />
          <div>
            <p className="font-man text-[16px] lg:text-[19px] text-[#838383] tracking-[-0.14px]  leading-[24px] lg:leading-8 md:w-[440px]">
              {t("upper_desc2")}
            </p>
            <br />
            <br />
            <p className="font-man text-[16px] lg:text-[19px] text-[#838383] tracking-[-0.14px]  leading-[24px] lg:leading-8 md:w-[440px]">
              {t("upper_desc3")}
            </p>
          </div>
        </div>
      </section>

      <Image
        sizes="50vw"
        className="absolute sm:mx-[12px] scale-[0.9] lg:scale-[1] bottom-[-60px] sm:bottom-[-100px] md:bottom-[-125px] lg:bottom-[-185px] left-[0px] rounded-[20px]"
        src={truck1}
        alt="turck1"
      />
    </div>
  );
};

export default Upperblock;
