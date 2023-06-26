import React from "react";
import Button from "../UI/Button/Button";
import FooterButton from "../UI/Button/FooterButton";
import Image from "next/image";
import logo from "../../public/assets/images/logoaqords.svg";
import Link from "next/link";
import { LinksForLearn, LinkForExplore } from "../Constant/FooterLinks";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-[60px] md:py-[115px] bg-second">
      <div className="container">
        <div className=" flex flex-col items-start smx:items-center gap-[20px] md:items-start  md:flex-row  md:justify-between border-b border-opacity-25 border-[#98A2B3] mb-[40px]">
          <div className="max-w-[270px] smx:max-w-full text-left smx:text-center md:text-left mb-[35px]">
            <h3 className="font-medium text-[32px] text-white mb-[10px]">
              {t("Subscribe to our newsletter")}
            </h3>
            <p className="text-[#838383]">
              {t(
                "The latest news, articles, and resources, sent to your inbox weekly."
              )}
            </p>
          </div>

          <form className="flex md:items-start gap-[16px] mb-[56px] md:mb-[0px] ">
            <input
              name="email"
              autoComplete="email"
              type="text"
              placeholder="Enter your email"
              className="text-white text-sm w-[224px] leading-[19px] placeholder-[#6B7280] bg-white bg-opacity-5 rounded-[6px]  px-[12px] py-[12px] font-cyr"
            />
            <FooterButton />
          </form>
        </div>

        <div className="flex flex-col-reverse items-center md:gap-3  md:items-start md:flex-row justify-between border-b border-opacity-25 border-[#98A2B3] mb-[18px]">
          <div>
            <div className="hidden md:block mb-[17px]">
              <Image src={logo} alt="aqodrds logo" />
            </div>
            <p className="hidden md:block mb-[59px] text-[14px]">
              {t(
                "Empowering Carriers, Shippers and Freight Forwarders with Real-Time DEFI Payments"
              )}
            </p>
            <div className="flex flex-start mb-[40px]">
              <Button
                insideGradient="rounded-full bg-black"
                outsideGradient="hover:cursor-pointer rounded-full bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]"
              >
                <div className="text-[12px] mx-[32px] flex gap-[5px] lg:ml-[17px] lg:mr-[25px] lg:gap-[18px] lg:text-[16px]">
                  <p className="text-[#838383] text-[12px] smx:text-[14px]">
                    {t("Announcing our next round of funding.")}
                  </p>
                  <Link
                    href="/"
                    className="font-normal text-[12px] smx:text-[14px]"
                  >
                    {t("Read more →")}
                  </Link>
                </div>
              </Button>
            </div>
          </div>

          <div className="mb-[20px] mr-[55px] sm:mr-0 sm md:mb-0 flex gap-[110px]">
            <div>
              <span className=" leading-[20px] block mb-[30px] font-bold">
                {t("Learn")}
              </span>
              <ul>
                {LinksForLearn.map((obj) => (
                  <li
                    className=" leading-[42px] md:leading-[27px] lg:leading-[20px] font-man text-[#A1A1A6] mb-[12px] "
                    key={obj.path}
                  >
                    <Link className="text-[14px]" href={obj.path}>
                      {t(`${obj.name}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className=" leading-[20px] block mb-[30px] font-bold">
                {t("Explore")}
              </span>
              <ul>
                {LinkForExplore.map((obj) => (
                  <li
                    className=" font-man text-[#A1A1A6] mb-[12px] leading-[20px]"
                    key={obj.path}
                  >
                    <Link className="text-[14px]" href={obj.path}>
                      {t(`${obj.name}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[12px] text-[#98a2b3] font-man">
            {t("© 2023 AQORDS, Inc. All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
