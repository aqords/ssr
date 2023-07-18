import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import moment from "moment";

import { linksForDesktop, linksForMobile } from "../Constants/HeaderLinks";
import logo from "../../public/assets/images/logo.png";
import burger from "../../public/assets/images/burger-btn.png";
import closeburg from "../../public/assets/images/close-burger.png";
import Button from "../UI/Button/Button";

const Header = () => {
  const { t } = useTranslation();

  const currentLocation = useRouter().pathname.split("/");
  const currentLocationForBurger = useRouter().pathname.slice(1);

  const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false);

  const toggleBurger = () => {
    setIsOpenBurger(!isOpenBurger);
  };

  const closeBurgerWhenNoRedirect = (path: string) => {
    currentLocationForBurger === path.slice(1)
      ? setIsOpenBurger(!isOpenBurger)
      : "";
  };

  useEffect(() => {
    isOpenBurger
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpenBurger]);

  return (
    <>
      <div
        className={`overflow-y-scroll ${
          isOpenBurger ? "h-[100vh]" : ""
        } fixed top-[0px] left-[0px] w-[100vw]  bg-black z-10 md:hidden`}
      >
        <div className="flex justify-between items-center h-[48px] mb-[12px]  ">
          <button className="w-[60px] h-[60px]" onClick={toggleBurger}>
            {isOpenBurger ? (
              <Image
                sizes="50vw"
                className="scale-[1.5] ml-[20px] mt-[9px]"
                src={closeburg}
                alt="menu"
              />
            ) : (
              <Image
                className="ml-[15px] mt-[9px]"
                sizes="50vw"
                src={burger}
                alt="menu"
              />
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
          {isOpenBurger && (
            <ul className="flex flex-col gap-[12px] container">
              {linksForMobile.map((obj) => {
                return (
                  <div onClick={() => closeBurgerWhenNoRedirect(obj.path)}>
                    <Link
                      key={obj.path}
                      href={obj.path}
                      className="relative overflow-hidden text-[20px] px-[20px] h-[80px] mobile-button-color w-[100%] rounded-[20px] text-white hover:cursor-pointer  flex justify-between items-center "
                    >
                      <p>{t(obj.name)}</p>
                      {obj.url && (
                        <Image
                          sizes="50vw"
                          className="absolute right-[0px]"
                          src={obj.url}
                          alt="logo"
                        />
                      )}
                    </Link>
                  </div>
                );
              })}
              <>
                <span className="block h-[1px] w-full span-gradient my-[32px]"></span>
                <p className="text-center text-[12px] text-[#98a2b3] font-man mb-[32px]">
                  {"© " + moment().year() + " " + `${t("footer_rights")}`}
                </p>
              </>
            </ul>
          )}
        </nav>
      </div>
      <div className="hidden w-full md:block fixed top-[0px]  left-1/2 transform -translate-x-1/2 z-[10] bg-black">
        <div className="container ">
          <nav className=" flex items-center justify-between h-[96px]">
            <Link
              href="/"
              className="flex max-w-screen-sm items-center justify-center hover:cursor-pointer xl:mr-[120px] ml-[2px]"
            >
              <Image
                sizes="50vw"
                src={logo}
                width={52}
                height={50}
                alt="aqords logo"
              />
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
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
