import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

import { Routes } from "../Constants/Routes";
import Button from "../UI/Button/Button";
import circle from "/public/assets/images/circle.png";

const PapperHead = () => {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <div className="container pb-[40px]  lg:py-[120px]">
          <h1 className="font-bold text-[29px] lg:text-[44px] lg:tracking-[0.3px] leading-[2.2rem] lg:leading-[3.7rem] mb-[30px]">
            {t("whitepaper_title1")}
          </h1>
          <p className="font-man text-[15px] lg:text-[20px] leading-[1.5rem] lg:leading-[2rem] lg:tracking-[-0.45px] mb-[35px]">
            {t("whitepaper_desc1")}
          </p>
          <p className="font-man text-[#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
            {t("whitepaper_desc2")}
          </p>
        </div>
      </section>

      <section className="relative bg-black lg:bg-[#19191A]">
        <div className="container h-auto lg:h-[580px] flex flex-col-reverse  lg:flex-row lg:items-center ">
          <div className="  xl:max-w-[531px]">
            <h2 className="leading-0 lg:leading-[1.8rem]   font-bold text-[32px] lg:text-[24px] mt-[50px]   mb-[40px] tracking-[-1.5px]">
              {t("whitepaper_desc3")}
            </h2>
            <div className="flex justify-center lg:justify-start mb-[40px]">
              <Link
                href={Routes[9].path}
                className="font-man font-normal text-[16px]"
              >
                <Button
                  outsideGradient={
                    "hover:btn-hover-gradient hover:cursor-pointer rounded-full md:mt-[0px] mt-[10px] bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[2px]"
                  }
                >
                  <button className="mx-[102px] sm:mx-[65px] my-[10px]  md:my-[10px] md:text-[20px] font-man">
                    {t("whitepaper_open")}
                  </button>
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full ">
            <Image
              className="rounded-[20px] lg:rounded-none"
              src={circle}
              // className="absolute top-0  right-[15%] h-[580px] "
              alt="borderlight"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PapperHead;
