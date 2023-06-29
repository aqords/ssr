import React from "react";
import { useTranslation } from "next-i18next";

import gradient1 from "/public/assets/images/gradientimg.svg";
import gradient2 from "/public/assets/images/gradientimg2.svg";
import Image from "next/image";
import bull from "/public/assets/images/bull.svg";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";

const InfoAboutblock = () => {
  const { t } = useTranslation();
  console.log(t);

  return (
    <>
      <section className="relative">
        <div className="container relative  pt-[60px] sm:pt-[0px] md:pt-[30px] lg:pt-[60px]  pb-[130px] lg:pb-[187px]">
          <p className="font-normal  text-[#838383] text-[16px] lg:text-[20px]  font-man  leading-[24px] md:leading-[32px] tracking-[-0.14px] mb-[30px]">
            {t("info_about_block_desc1")}
          </p>
          <p className="font-normal  text-[#838383] text-[16px] lg:text-[20px]  font-man  leading-[24px] md:leading-[32px] tracking-[-0.14px]  mb-[60px] md:mb-[80px] ">
            {t("info_about_block_desc2")}
          </p>
        </div>
        <div className="container relative top-[-170px]">
          <Image
            className="absolute px-[12px]  left-1/2 transform -translate-x-1/2 "
            alt="gradient"
            src={gradient1}
            width={1084}
            height={375}
          />
        </div>

        <div className="bg-[#19191A]">
          <div className="container  smx:pt-[60px] sm:pt-[80px]  md:pt-[160px] lg:pt-[267px]   pb-[40px]  lg:flex justify-between">
            <div>
              <p className="font-normal text-[16px] lg:text-[20px] font-man lg:max-w-[532px] leading-[24px] lg:leading-[32px] tracking-[-0.14px] mb-[30px]">
                Our core focus is to leverage the power of blockchain technology
                to streamline contract execution, enable instant payments, and
                enhance security throughout the entire logistics process. By
                digitizing and automating key aspects of freight transportation,
                we eliminate the need for cumbersome paperwork, reduce
                administrative overhead, and facilitate real-time tracking and
                monitoring of shipments.
              </p>
              <p className="font-normal  text-[16px] lg:text-[20px] font-man lg:max-w-[532px] leading-[24px] lg:leading-[32px] tracking-[-0.14px] ">
                We believe that collaboration and partnership are essential for
                success. We are actively seeking strategic alliances with major
                shippers, freight forwarders, and technology providers to ensure
                seamless integration and adoption of our platform. Together, we
                can build a thriving ecosystem that fosters innovation,
                accelerates growth, and delivers tangible benefits to all
                stakeholders involved. Stay tuned for updates on our progress
                and be prepared to embark on a transformative journey with
                AQORDS.
              </p>
            </div>

            <Image
              className="hidden lg:block"
              alt="gradient2"
              src={gradient2}
              width={440}
              height={576}
            />
          </div>
        </div>

        <div className="bg-[#202020] ">
          <div className=" py-[48px] lg:py-[92px] container">
            <div className="max-w-[440px]">
              <h1 className="leading-[2.8rem] lg:leading-[3.8rem]   font-bold text-[32px] lg:text-[48px]  mb-[30px] tracking-[-1.5px]">
                Experience the future of supply chains with AQORDS.
              </h1>
              <p className="font-normal text-[16px] lg:text-[20px] font-man max-w-[532px] leading-6 md:leading-8 tracking-[-0.42px] ">
                Join us in shaping the future of freight transportation powered
                by blockchain technology. Together, we can unlock new
                possibilities, enhance operational efficiency, and establish a
                trusted ecosystem that sets new industry standards.
              </p>
            </div>
          </div>
          {/* <div className="w-[274px] h-[318px] scale-[0.85] lg:scale-[1]">
          <Image
            className=" relative left-[-70px] top-[-60px] max-w-none md:relative md:left-[385px] lg:left-[-135px] lg:top-[0px]"
            alt="bull"
            src={bull}
            width={440}
            height={576}
          />
        </div> */}
        </div>
      </section>
    </>
  );
};

export default InfoAboutblock;
