import React from "react";
import Button from "../UI/Button/Button";
import circle from "/public/assets/images/circle.png";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

const WhitePapperHead = () => {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <div className="container pb-[85px]">
          <h1 className="font-bold text-[29px] lg:text-[44px] lg:tracking-[0.3px] leading-[2.2rem] lg:leading-[3.7rem] mb-[30px]">
            {t("Whitepapper")}
          </h1>
          <p className="font-man text-[15px] lg:text-[20px] leading-[1.5rem] lg:leading-[2rem] lg:tracking-[-0.45px] mb-[35px]">
            {t(
              "Discover the transformative power of AQORDS in our concise whitepaper. Explore the technical details, benefits, and future developments of our blockchain platform for freight transportation. Unleash the potential of smart contracts, decentralized finance integration, and seamless collaboration among shippers, carriers, and supply chain partners."
            )}
          </p>
          <p className="font-man text-[#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
            {t(
              "Learn about the QOR token, governance structure, and our roadmap forinnovation. Join us as we revolutionize the industry with trust,transparency, and efficiency."
            )}
          </p>
        </div>
      </section>

      <section className="relative bg-[#19191A]">
        <div className="container  py-[195px]">
          <div className=" max-w-[531px]">
            <div className="absolute"></div>
            <h1 className="leading-[0.8rem] lg:leading-[1.8rem]   font-bold text-[32px] lg:text-[24px]  mb-[40px] tracking-[-1.5px]">
              {t(
                "Dive into the AQORDS whitepaper and embark on a new era of trust,transparency, and efficiency in freight transportation."
              )}
            </h1>
            <div className="flex flex-start mb-[40px]">
              <Button
                insideGradient="rounded-full bg-black"
                outsideGradient="hover:cursor-pointer rounded-full bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]"
              >
                <div className=" py-[11px] px-[54px]">
                  <Link
                    href="/whitepappetinfo/whitepapperinfo"
                    className="font-man font-normal text-[14px] smx:text-[18px]"
                  >
                    {t("Open whitepaper")}
                  </Link>
                </div>
              </Button>
            </div>
          </div>
        </div>

        <Image
          src={circle}
          className="absolute top-0  right-[15%] h-[580px] "
          alt="borderlight"
        />
      </section>
    </>
  );
};

export default WhitePapperHead;
