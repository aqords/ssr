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

const isMobile = true;

const Header = () => {
  return isMobile ? (
    <header className="container">
      <div className="flex justify-between items-center h-[60px]">
        <button>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className="text-sm px-[35px] py-[2px] gradient-button">
          Connect wallet
        </button>
      </div>
      <nav className="">
        <ul className="flex flex-col gap-[10px] w-[100%]">
          {linksForMobile.map((obj) => {
            return (
              <li
                key={obj.path}
                className="px-[20px] h-[80px] mobile-button-color w-[100%] rounded-[20px] text-white hover:cursor-pointer flex items-center"
              >
                <Link href={obj.path}>{obj.name}</Link>
                {obj.url ? <Image src={obj.url} alt="logo" /> : ""}
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
          className="w-[58px] h-[58px] gradient-border-brown-yellow hover:cursor-pointer"
        >
          <Image src={logo} width={50} height={50} alt="aqords logo" />
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
        <button className="text-sm px-[35px] py-[2px] gradient-button">
          Connect wallet
        </button>
      </nav>
    </header>
  );
};

export default Header;
