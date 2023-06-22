import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const ItemsList = dynamic(() => import("./WhyAccordsList"));

const WhyAccordsList = () => {
  return (
    <>
      <main>
        <section className="bg-second">
          <div className="container">
            <div className="pt-[100px] sm:pt-[150px] md:pt-[320px]">
              <h2 className="  font-bold text-2xl md:text-[48px]  mb-[43px] tracking-[-1.5px]">
                Why AQORDS?
              </h2>
              <p className="font-normal  text-base md:text-lg font-man max-w-[790px] leading-6 md:leading-8 tracking-[-0.42px] ">
                AQORDS revolutionizes the freight transportation industry with
                blockchain-powered solutions and unprecedented opportunities.
              </p>
            </div>
            <ItemsList />
          </div>
        </section>

        <section className="relative">
          <div className="absolute inset-0 z-[-1] h-[807px]">
            <Image
              src="/assets/images/truck.png"
              alt="Background Image"
              width={2500}
              height={807}
            />
          </div>
          <div className="container">
            <div className="  py-[22%] w-full max-w-[330px] md:max-w-[530px]">
              <h3 className="tracking-[-1.5px] max-w-[280px] md:max-w-[537px] text-2xl leading-10 md:leading-[59px] font-bold  md:text-[48px] mb-[30px]">
                Are you prepared to embark on this transformative journey?
              </h3>
              <p className=" tracking-[-0.14px] font-man  font-normal md:text-[20px] text-base leading-[24px]  md:leading-[32px] ">
                Delve into our website to unravel the intricate workings of our
                platform, acquaint yourself with our exceptional team, and
                witness firsthand how AQORDS propels your freight transportation
                operations into a new era.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WhyAccordsList;
