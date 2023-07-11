import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import ScrollToggle from "../../utils/hooks/ScrollToggle";
import useScrollClassChange from "../../utils/hooks/useScrollChange";

interface BlockWithBackgroundProps {
  title?: string;
  desc1?: JSX.Element;
  desc2?: JSX.Element;
  img?: StaticImageData;
  imgStyle?: string;
  blockStyle?: string;
  blockStyle2?: string;
  blockStyle3?: string;
  priority?: boolean;
}

const BlockWithBackground = ({
  title,
  desc1,
  desc2,
  img,
  imgStyle,
  blockStyle,
  blockStyle2 = "container flex lg:h-full items-center",
  blockStyle3 = "max-w-[532px]",
  priority = false,
}: BlockWithBackgroundProps) => {
  const isScrolled = ScrollToggle({
    targetClasses: ["el-1"],
    visibleClass: "visible",
  });

  const elementRef = useRef<HTMLDivElement>(null);

  useScrollClassChange({
    elementRefs: [elementRef],
    className: "original",
  });

  return (
    <section className={blockStyle}>
      <div className={blockStyle2}>
        <div
          ref={elementRef}
          className={`${isScrolled["el-1"] ? "el-1 visible" : "el-1 original"}`}
        >
          <div className={blockStyle3}>
            <h3 className="font-bold text-[29px] lg:text-[44px] lg:tracking-[0.3px] leading-[2.2rem] lg:leading-[3.7rem] mb-[30px]">
              {title}
            </h3>
            <p className="font-man text-[15px] lg:text-[20px] leading-[1.5rem] lg:leading-[2rem] lg:tracking-[-0.45px] mb-[35px]">
              {desc1}
            </p>
            <p className="font-man text-[#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
              {desc2}
            </p>
          </div>
        </div>
      </div>
      {img && (
        <Image
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw"
          className={imgStyle}
          priority={priority}
          src={img}
          alt="backgroundimage"
        />
      )}
    </section>
  );
};

export default BlockWithBackground;
