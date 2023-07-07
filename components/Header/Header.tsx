import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import moment from "moment";

import { useIsMobile } from "../../utils/hooks/useMobile/useIsMobile";
import { linksForDesktop, linksForMobile } from "../Constants/HeaderLinks";
import logo from "../../public/assets/images/logo.svg";
import burger from "../../public/assets/images/burger-btn.svg";
import closeburg from "../../public/assets/images/close-burger.svg";
import Button from "../UI/Button/Button";

const Header = () => {
  const { t } = useTranslation();

  const currentLocation = useRouter().pathname.split("/");

  const [isOpenBurger, setIsOpenBureger] = useState<boolean>(false);

  const toggleBurger = () => {
    isOpenBurger ? setIsOpenBureger(false) : setIsOpenBureger(true);
  };

  useEffect(() => {
    isOpenBurger
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpenBurger]);

  const isMobile = useIsMobile();

  return isMobile ? (
    <header
      className={`overflow-y-scroll ${
        isOpenBurger ? "h-[100vh]" : ""
      } relative bg-black z-10`}
    >
      <div className="flex container justify-between items-center h-[48px] mb-[12px]">
        <button className="ml-[3px] mt-[10px]" onClick={(e) => toggleBurger()}>
          {isOpenBurger ? (
            <Image
              sizes="50vw"
              className="scale-[1.3] ml-[5px]"
              src={closeburg}
              alt="menu"
            />
          ) : (
            <Image sizes="50vw" src={burger} alt="menu" />
          )}
        </button>
        {/* <Button
          outsideGradient={
            "hover:btn-hover-gradient rounded-full  bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[2px] hover:cursor-pointer"
          }
        >
          <button className="px-[30px]">{t("connect_wallet")}</button>
        </Button> */}
      </div>
      <nav>
        {isOpenBurger ? (
          <ul className="flex flex-col gap-[12px] container">
            {linksForMobile.map((obj) => {
              return (
                <Link
                  key={obj.path}
                  href={obj.path}
                  className="relative overflow-hidden text-[20px] px-[20px] h-[80px] mobile-button-color w-[100%] rounded-[20px] text-white hover:cursor-pointer  flex justify-between items-center "
                >
                  <p>{t(obj.name)}</p>

                  {obj.bgLight ? <div className={obj.bgLight}></div> : ""}

                  {obj.url ? (
                    <Image
                      sizes="50vw"
                      className="absolute right-[0px]"
                      src={obj.url}
                      alt="logo"
                    />
                  ) : (
                    ""
                  )}
                  {obj.name === "about" ? (
                    <div className="absolute top-[-90px] right-[-80px] w-[183px] h-[183px] opacity-40 background-light"></div>
                  ) : (
                    ""
                  )}
                </Link>
              );
            })}

            <>
              <span className="block h-[1px] w-full span-gradient my-[32px]"></span>
              <p className="text-center text-[12px] text-[#98a2b3] font-man mb-[32px]">
                {"© " + moment().year() + " " + `${t("footer_rights")}`}
              </p>
            </>
          </ul>
        ) : (
          ""
        )}
      </nav>
    </header>
  ) : (
    <header className="container">
      <nav className="flex items-center justify-between h-[96px]">
        <Link
          href="/"
          className="flex max-w-screen-sm items-center justify-center hover:cursor-pointer xl:mr-[120px] ml-[2px]"
        >
          <div className="rounded-[8px] bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]">
            <div className="rounded-[8px] w-full bg-black p-[1px]">
              <Image
                sizes="50vw"
                src={logo}
                width={52}
                height={50}
                alt="aqords logo"
              />
            </div>
          </div>
        </Link>
        <ul className="flex gap-[10px] lg:gap-[34px]">
          {linksForDesktop.map((obj) => {
            return (
              <li
                key={obj.path}
                className={`  ${
                  obj.path.slice(1) === currentLocation[1]
                    ? "font-[500] bg-clip-text text-transparent bg-gradient-to-tl from-[#C6B38A] from-0% via-[#F3C691] via-46% to-[#B4703E] to-100% border-b-[1px] gradient-brown-yellow "
                    : "text-[#B3B3B3] hover:text-[#E5E5E5]"
                } text-sm font-man hover:cursor-pointer `}
              >
                <Link href={obj.path}>{t(obj.name)}</Link>
              </li>
            );
          })}
        </ul>
        {/* <Button
          outsideGradient={
            "hover:btn-hover-gradient rounded-full  bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[2px] hover:cursor-pointer"
          }
        >
          <button className="px-[30px] font-man text-sm">
            {t("connect_wallet")}
          </button>
        </Button> */}
        <div className="lg:px-[85px]"></div>
      </nav>
    </header>
  );
};

export default Header;
