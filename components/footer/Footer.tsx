import React from "react";
import Button from "../UI/Button/Button";
import FooterButton from "../UI/Button/FooterButton";
import Image from "next/image";
import logo from "../../public/assets/images/logoaqords.svg";
import Link from "next/link";

const LinksForLearn = [
  {
    name: "About",
    path: "/",
  },
  {
    name: "How it works",
    path: "/",
  },
  {
    name: "Manifesto",
    path: "/",
  },
  {
    name: "Whitepaper",
    path: "/",
  },
];
const LinkForExplore = [
  {
    name: "Road map",
    path: "/",
  },
  {
    name: "Team",
    path: "/",
  },
  {
    name: "Contact us",
    path: "/",
  },
];
const Footer = () => {
  return (
    <footer className="py-[120px] bg-second">
      <div className="container">
        <div className="flex justify-between border-b border-opacity-25 border-[#98A2B3] mb-[40px]">
          <div className="mb-[40px]">
            <h3 className="font-medium text-2xl text-white mb-[10px]">
              Subscribe to our newsletter
            </h3>
            <p className="text-[#838383]">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>

          <form className="flex items-start gap-[16px] ">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-white text-sm w-[224px] leading-[19px] placeholder-[#6B7280] bg-white bg-opacity-5 rounded-[6px]  px-[12px] py-[12px] font-cyr"
            />
            <FooterButton />
          </form>
        </div>

        <div className="flex justify-between">
          <div>
            <div className="mb-[24px]">
              <Image src={logo} alt="aqodrds logo" />
            </div>
            <p className="block mb-[71px] text-[14px]">
              Empowering Carriers, Shippers and Freight Forwarders with
              Real-Time DEFI Payments
            </p>
            <div className="flex flex-start">
              <Button
                insideGradient="bg-black"
                outsideGradient="bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]"
              >
                <div className="text-[12px] mx-[32px] flex gap-[5px] lg:ml-[15px] lg:mr-[15px] lg:gap-[24px] lg:text-[16px]">
                  <p className="text-[#838383] text-[14px]">
                    Announcing our next round of funding.
                  </p>
                  <p className="font-normal text-[14px]">Read more →</p>
                </div>
              </Button>
            </div>
          </div>

          <div className="flex gap-[110px]">
            <div>
              <span className="block mb-[32px] font-bold">Learn</span>
              <ul>
                {LinksForLearn.map((link, i) => (
                  <li
                    className="text-[#A1A1A6] mb-[12px] leading-[20px]"
                    key={i}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="block mb-[32px] font-bold">Explore</span>
              <ul>
                {LinkForExplore.map((link, i) => (
                  <li
                    className=" text-[#A1A1A6] mb-[12px] leading-[20px]"
                    key={i}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
