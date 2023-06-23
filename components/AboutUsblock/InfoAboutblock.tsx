import React from "react";
import gradient1 from "/public/assets/images/gradientimg.svg";
import gradient2 from "/public/assets/images/gradientimg2.svg";
import Image from "next/image";
import bull from "/public/assets/images/bull.svg";

const InfoAboutblock = () => {
  return (
    <section className="relative">
      <div className="container pt-[120px] pb-[187px]">
        <p className="font-normal  text-[#838383] text-[20px] md:text-lg font-man  leading-6 md:leading-8 tracking-[-0.42px] mb-[30px]">
          Driven by our passion for disruptive technologies, we have embarked on
          a remarkable journey to create a decentralized smart contract platform
          specifically designed for the needs of the freight transportation
          industry. Our team combines extensive experience in supply chains,
          blockchain technology, decentralized finance (DeFi), and online
          marketplaces, enabling us to tackle the complex challenges faced by
          the industry head-on.
        </p>
        <p className="font-normal  text-[#838383] text-[20px] md:text-lg font-man  leading-6 md:leading-8 tracking-[-0.42px] mb-[80px]">
          As trailblazers in this field, we understand the pain points and
          inefficiencies that plague traditional freight transportation
          processes. Outdated systems, manual paperwork, delayed payments, and a
          lack of transparency have long hindered the industry's potential.
          That's why we set out to develop a platform that transforms these
          challenges into opportunities for growth, operational excellence, and
          financial empowerment.
        </p>
      </div>
      <div className="absolute top-[486px] left-1/2 transform -translate-x-1/2 ">
        <Image alt="gradient" src={gradient1} width={1084} height={375} />
      </div>

      <div className="bg-[#19191A]">
        <div className="container  pt-[267px] pb-[80px] flex gap-[112px]">
          <div>
            <p className="font-normal  md:text-lg font-man max-w-[532px] leading-6 md:leading-8 tracking-[-0.42px] mb-[30px]">
              Our core focus is to leverage the power of blockchain technology
              to streamline contract execution, enable instant payments, and
              enhance security throughout the entire logistics process. By
              digitizing and automating key aspects of freight transportation,
              we eliminate the need for cumbersome paperwork, reduce
              administrative overhead, and facilitate real-time tracking and
              monitoring of shipments.
            </p>
            <p className="font-normal  md:text-lg font-man max-w-[532px] leading-6 md:leading-8 tracking-[-0.42px] mb-[30px]">
              We believe that collaboration and partnership are essential for
              success. We are actively seeking strategic alliances with major
              shippers, freight forwarders, and technology providers to ensure
              seamless integration and adoption of our platform. Together, we
              can build a thriving ecosystem that fosters innovation,
              accelerates growth, and delivers tangible benefits to all
              stakeholders involved. Stay tuned for updates on our progress and
              be prepared to embark on a transformative journey with AQORDS.
            </p>
          </div>

          <Image alt="gradient2" src={gradient2} width={440} height={576} />
        </div>
      </div>

      <div className="bg-[#202020]">
        <div className=" py-[92px] container">
          <div className="max-w-[440px]">
            <h3 className=" leading-[3.8rem]   font-bold text-2xl md:text-[48px]  mb-[30px] tracking-[-1.5px]">
              Experience the future of supply chains with AQORDS.
            </h3>
            <p className="font-normal  md:text-lg font-man max-w-[532px] leading-6 md:leading-8 tracking-[-0.42px] ">
              Join us in shaping the future of freight transportation powered by
              blockchain technology. Together, we can unlock new possibilities,
              enhance operational efficiency, and establish a trusted ecosystem
              that sets new industry standards.
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
  );
};

export default InfoAboutblock;
