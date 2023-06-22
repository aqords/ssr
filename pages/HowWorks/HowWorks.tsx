import Image from "next/image";
import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import Navigationblock from "../../components/Navigationblock/Navigationblock";

const HowWorks = () => {
  return (
    <>
      <section className="container relative">
        <div
          className="
      absolute lg:top-[-1091px] lg:left-[-572px] w-[975px] h-[975px] opacity-20 background-light z-[-10] top-[-951px] left-[-612px]"
        ></div>
        <article className="mb-[80px] mt-[120px]">
          <h2 className="font-bold text-[48px] mb-[30px]">How it works</h2>
          <p className="font-man text-[20px] tracking-[-0.14px] leading-8 mb-[80px]">
            At AQORDS, we are developing a user-friendly and efficient platform
            that simplifies the freight transportation process through the power
            of blockchain technology. Our goal is to provide a seamless and
            transparent experience for all parties involved, from shippers and
            carriers to freight exchange platforms.
          </p>
          <div className="h-[375px] w-full rounded-[20px] bg-gray ">
            {/* <Image /> */}
          </div>
        </article>
        <span className="hidden md:block h-[1px] w-full bg-[#98A2B3] opacity-25 my-[40px]"></span>
        <Accordion />
        <span className="hidden md:block h-[1px] w-full bg-[#98A2B3] opacity-25 my-[40px]"></span>
      </section>
      <section className="howitwork-gradient h-[807px]">
        <div className="container h-full flex items-center">
          <div className="max-w-[580px] flex gap-[30px] flex-col ">
            <h3 className="font-bold text-[42px] tracking-[-0.5px] leading-[3rem]">
              To get started, shippers and carriers can easily integrate their
              existing systems or applications with the AQORDS platform.
            </h3>
            <p className="font-man text-[19px] tracking-[-0.14px]">
              Our seamless integration process ensures a smooth transition and
              minimal disruption to your current operations.
            </p>
            <p className="font-man text-[#838383] text-[15px] tracking-[-0.14px]">
              We also collaborate with major freight exchange platforms to
              enhance connectivity and expand your network of potential business
              partners.
            </p>
          </div>
        </div>
      </section>

      <Navigationblock />
    </>
  );
};

export default HowWorks;
