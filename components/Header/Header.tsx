import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/images/logo.svg";
import manifesto from "../../public/assets/images/manifesto-btn.svg";
import about from "../../public/assets/images/aboutus-btn.svg";

interface Link {
  name: string;
  path: string;
  url?: string;
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
  },
  {
    name: "Manifesto",
    path: "/",
    url: manifesto,
  },
  {
    name: "Whitepapper",
    path: "/",
  },
  {
    name: "Road map",
    path: "/",
  },
  {
    name: "About US",
    path: "/",
    url: about,
  },
  {
    name: "Our team",
    path: "/",
  },
];

const isMobile = false;

const Header = () => {
  return isMobile ? (
    <header className="container">
      <div className="flex justify-between items-center h-[60px]">
        <button>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="flex min-h-screen max-w-screen-sm items-center justify-center">
          <div className=" w-full rounded-full bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[2px]">
            <div className="flex h-full rounded-full w-full items-center justify-center bg-gradient-to-r from-[#27241d]  to-[#252118] p-[1px]">
              <button className="text-white text-sm px-[37px]">
                Connect wallet
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav className="">
        <ul className="flex flex-col gap-[10px] w-[100%]">
          {linksForMobile.map((obj) => {
            return (
              <li
                key={obj.path}
                className="px-[20px] h-[80px] mobile-button-color w-[100%] rounded-[20px] text-white hover:cursor-pointer flex justify-between items-center overflow-hidden"
              >
                <Link href={obj.path}>{obj.name}</Link>
                {obj.url ? (
                  <Image className="m-[-19px]" src={obj.url} alt="logo" />
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
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
        <div className="flex min-h-screen max-w-screen-sm items-center justify-center">
          <div className=" w-full rounded-full bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[2px]">
            <div className="flex h-full rounded-full w-full items-center justify-center bg-gradient-to-r from-[#27241d]  to-[#252118] p-[1px]">
              <button className="text-white text-sm px-[37px]">
                Connect wallet
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
