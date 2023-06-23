import React, { useRef } from "react";
import WhyAqordsList from "./WhyAqordsList";
import ScrollToggle from "../../utils/hooks/ScrollToggle";
import useScrollClassChange from "../../utils/hooks/useScrollChange";
import { useTranslation } from "next-i18next";
import { renderObject } from "../Constant/WhyAqordsItems";

interface WhyAqordsProps {
  itemsArray: renderObject[];
}

const WhyAqords = ({ itemsArray }: WhyAqordsProps) => {
  const { t } = useTranslation();
  const isScrolled = ScrollToggle({
    targetClasses: ["el-1", "el-2", "el-3"],
    visibleClass: "visible",
    originalClass: "original",
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
                {t("Why AQORDS?")}
              </h2>
              <p className="font-normal  text-base md:text-lg font-man max-w-[790px] leading-6 md:leading-8 tracking-[-0.42px] ">
                {t(
                  "AQORDS revolutionizes the freight transportation industry with blockchain-powered solutions and unprecedented opportunities."
                )}
              </p>
            </div>
          </div>
          <WhyAqordsList itemsArray={itemsArray} />
        </div>
      </section>

      <section className=" bg-no-repeat bg-cover  bg-[url('../public/assets/images/truck.png')] sm:bg-center ">
        <div className="container">
          <div className="  py-[22%] w-full md:max-w-[530px]">
            <div
              ref={elementRef2}
              className={isScrolled["el-2"] ? "el-2 visible" : "el-2 original"}
            >
<<<<<<< HEAD
              <h3 className="tracking-[-1.5px] md:max-w-[537px] text-2xl leading-10 md:leading-[59px] font-bold  md:text-[48px] mb-[30px]">
                Are you prepared to embark on this transformative journey?
=======
              <h3 className="tracking-[-1.5px]md:max-w-[537px] text-2xl leading-10 md:leading-[59px] font-bold  md:text-[48px] mb-[30px]">
                {t(
                  "Are you prepared to embark on this transformative journey?"
                )}
>>>>>>> HowItWorks
              </h3>
            </div>
            <div
              ref={elementRef3}
              className={isScrolled["el-3"] ? "el-3 visible" : "el-3 original"}
            >
              <p className=" tracking-[-0.14px] font-man  font-normal md:text-[20px] text-base leading-[24px]  md:leading-[32px] ">
                {t(
                  "Delve into our website to unravel the intricate workings of ourplatform, acquaint yourself with our exceptional team, and witness firsthand how AQORDS propels your freight transportation operations into a new era."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyAqords;
