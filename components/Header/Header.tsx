import React, { use, useEffect, useState } from "react";
import { useResize } from "../../utils/hooks/useResize";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/images/logo.svg";
import manifesto from "../../public/assets/images/manifesto-btn.svg";
import about from "../../public/assets/images/aboutus-btn.svg";
import burger from "../../public/assets/images/burger-btn.svg";
import closeburg from "../../public/assets/images/close-burger.svg";
import Button from "../UI/Button/Button";

interface Link {
  name: string;
  path: string;
  url?: string;
  bgLight?: string;
}

const linksForDesktop: Link[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/",
  },
  {
    name: "Manifesto",
    path: "/",
  },
  {
    name: "How it works",
    path: "/",
  },
  {
    name: "Whitepaper",
    path: "/",
  },
  {
    name: "Team",
    path: "/",
  },
  {
    name: "Road map",
    path: "/",
  },
];
const linksForMobile: Link[] = [
  {
    name: "How it does works?",
    path: "/",
    bgLight:
      "absolute top-[100px] left-[-85px] w-[181px] h-[193px] opacity-40 background-light",
  },
  {
    name: "Manifesto",
    path: "/",
    url: manifesto,
    bgLight:
      "absolute top-[90px] left-[-85px] w-[181px] h-[193px] opacity-40 background-light",
  },
  {
    name: "Whitepapper",
    path: "/",
    bgLight:
      "absolute top-[70px] left-[-50px] w-[181px] h-[92px] opacity-40 background-light",
  },
  {
    name: "Road map",
    path: "/",
    bgLight:
      "absolute top-[70px] left-[-75px] w-[181px] h-[316px] opacity-40 background-light",
  },
  {
    name: "About US",
    path: "/",
    url: about,
    bgLight:
      "absolute top-[40px] left-[-115px] w-[181px] h-[316px] opacity-40 background-light",
  },
  {
    name: "Our team",
    path: "/",
    bgLight:
      "absolute top-[50px] left-[-65px] w-[181px] h-[316px] opacity-40 background-light",
  },
];

const Header = () => {
  const [isOpenBurger, setIsOpenBureger] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  console.log(useResize().width);

  const toggleBurger = () => {
    isOpenBurger ? setIsOpenBureger(false) : setIsOpenBureger(true);
  };

  return isMobile ? (
    <header className="container relative">
      <div className="flex justify-between items-center h-[60px]">
        <button className="ml-[2px]" onClick={(e) => toggleBurger()}>
          {isOpenBurger ? (
            <Image className="scale-305" src={closeburg} alt="menu" />
          ) : (
            <Image src={burger} alt="menu" />
          )}
        </button>
        <Button text={"Connect wallet"} />
      </div>
      <nav className="">
        {isOpenBurger ? (
          <ul className="flex flex-col gap-[12px] w-[100%]">
            {linksForMobile.map((obj) => {
              return (
                <li
                  key={obj.path}
                  className="relative overflow-hidden text-[20px] px-[20px] h-[80px] mobile-button-color w-[100%] rounded-[20px] text-white hover:cursor-pointer flex justify-between items-center "
                >
                  <Link href={obj.path}>{obj.name}</Link>

                  {obj.bgLight ? <div className={obj.bgLight}></div> : ""}

                  {obj.url ? (
                    <Image className="m-[-19px]" src={obj.url} alt="logo" />
                  ) : (
                    ""
                  )}
                  {obj.name === "About US" ? (
                    <div className="absolute top-[-90px] right-[-80px] w-[183px] h-[183px] opacity-40 background-light"></div>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
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
          className="flex max-w-screen-sm items-center justify-center hover:cursor-pointer"
        >
          <div className="rounded-[8px] bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]">
            <div className="rounded-[8px] w-full bg-black p-[1px]">
              <Image src={logo} width={50} height={50} alt="aqords logo" />
            </div>
          </div>
        </Link>
        <ul className="flex gap-[32px]">
          {linksForDesktop.map((obj) => {
            return (
              <li
                key={obj.path}
                className="text-sm text-white bg-clip-text hover:text-transparent bg-gradient-to-tl from-[#C6B38A] from-0% via-[#F3C691] via-46% to-[#B4703E] to-100% border-b-[1px] border-[#080809] hover:border-b-[1px] hover:gradient-brown-yellow hover:cursor-pointer"
              >
                <Link href={obj.path}>{obj.name}</Link>
              </li>
            );
          })}
        </ul>
        <Button text={"Connect wallet"} />
      </nav>
    </header>
  );
};

export default Header;
