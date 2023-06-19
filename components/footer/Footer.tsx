import React from "react";
import Button from "../UI/Button/Button";
import FooterButton from "../UI/Button/FooterButton";
import Image from "next/image";
import logo from "../../public/assets/images/logoaqords.svg";
import Link from "next/link";

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

        <div className="">
          <Image src={logo} />
          <p>
            Empowering Carriers, Shippers and Freight Forwarders with Real-Time
            DEFI Payments
          </p>
          <div className=" w-full rounded-full bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[2px]">
            <div className="flex h-full rounded-full w-full   bg-gradient-to-r from-[#27241d]  to-[#252118] p-[1px]">
              <button className=" text-white text-sm px-[37px]">
                Announcing our next round of funding.
                <Link className="" href="">
                  Read more →
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
