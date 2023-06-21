import React from "react";
import Image from "next/image";

import Button from "../UI/Button/Button";
import aqordsLogo from "../../public/assets/images/aqords-logo.svg";
import truck2 from "../../public/assets/images/truck2.png";
import truck1 from "../../public/assets/images/truck1.png";

const Upperblock = () => {
  return (
    <div className="container relative pb-[100px] sm:pb-[150px] md:pb-[170px] lg:pb-[270px]">
      <div
        className="
      absolute lg:top-[-1091px] lg:left-[-572px] w-[975px] h-[975px] opacity-20 background-light z-[-10] top-[-951px] left-[-612px]"
      ></div>
      <section className="flex flex-col items-center">
        <Button
          insideGradient="rounded-full bg-black"
          outsideGradient="hover:cursor-pointer rounded-full bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]"
        >
          <div className="text-[12px] mx-[32px] flex gap-[5px] lg:ml-[70px] lg:mr-[90px] lg:gap-[22px] lg:text-[16px]">
            <p className="text-[#838383]">
              Announcing our next round of funding.
            </p>
            <p className="font-normal">Read more →</p>
          </div>
        </Button>
        <Image
          className="mt-[100px] mb-[39px]"
          src={aqordsLogo}
          alt="AQORDS Logo"
        />
        <p className="text-[32px] leading-[40px] font-[400] lg:text-[24px] max-w-[540px] lg:text-center mb-[120px] tracking-[-1.5px] lg:tracking-[-0.3px]">
          Empowering Carriers, Shippers and Freight Forwarders with Real-Time
          DEFI Payments
        </p>
      </section>
      <span className="block h-[1px] w-full span-gradient"></span>
      <section>
        <h2 className="text-[32px]  leading-[40px] lg:text-[48px] font-bold tracking-[-1.5px] mb-[40px] mt-[130px]">
          Discover the Future of Freight Transportation
        </h2>
        <p className="font-man text-[16px] lg:text-[20px] lg:mb-[79px] mb-[39px]">
          At AQORDS, we embark on a transformative journey to revolutionize the
          freight transportation industry by harnessing the immense potential of
          blockchain technology.
        </p>
        <div className="flex justify-center gap-[35px] lg:gap-[105px] flex-wrap">
          <Image
            className="rounded-[20px] w-[447px] h-[auto] md:w-[532px] md:h-[352px]"
            src={truck2}
            alt="turck2"
          />
          <p className="font-man text-[16px] lg:text-[19px] text-[#838383] tracking-[-0.14px]  leading-[24px] lg:leading-8 w-[440px]">
            Our cutting-edge platform empowers <br /> instant, verifiable, and
            highly secure transactions, <br /> ushering in an era of
            transparency, trust, and operational efficiency across global
            <br /> supply chains.
            <br />
            <br />
            Whether you represent a shipper, carrier, or a distinguished player
            in the realm of freight exchanges, AQORDS presents a comprehensive
            solution meticulously tailored to your unique requirements.
          </p>
        </div>
      </section>
      <Image
        className="absolute px-[12px] bottom-[-60px] sm:bottom-[-100px] md:bottom-[-125px] lg:bottom-[-185px] left-[0px] rounded-[20px]"
        src={truck1}
        alt="turck1"
      />
    </div>
  );
};

export default Upperblock;
