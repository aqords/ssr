import React from "react";
import Image, { StaticImageData } from "next/image";

interface BlockWithBackgroundProps {
  title?: string;
  desc1?: JSX.Element;
  desc2?: JSX.Element;
  img?: StaticImageData;
  imgStyle?: string;
  imgStyleWrapper?: string;
  blockStyle?: string;
}

const BlockWithBackground = ({
  title,
  desc1,
  desc2,
  img,
  imgStyle,
  imgStyleWrapper,
  blockStyle,
}: BlockWithBackgroundProps) => {
  return (
    <section className={blockStyle}>
      <div className="container flex lg:h-full items-center">
        <div className="max-w-[532px] ">
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
      <div className={imgStyleWrapper}>
        {img ? (
          <Image
            className={imgStyle}
            priority
            src={img}
            alt="backgroundimage"
          />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default BlockWithBackground;
