import Image from "next/image";
import NodeCard from "../UI/InfoCard.tsx/NodeCard";
import left1 from "../../public/assets/images/left1.svg";
import React, { useEffect, useState, useRef } from "react";
import ScrollToggle from "../../utils/hooks/ScrollToggle";
import useScrollClassChange from "../../utils/hooks/useScrollChange";
// import left2 from "../../public/assets/images/svgleft2.svg";
// import left3 from "../../public/assets/images/svgleft3.svg";
// import left4 from "../../public/assets/images/svgleft4.svg";
import fullline1 from "../../public/assets/images/fullline1.svg";
import fullline2 from "../../public/assets/images/fullline2.svg";
import linevector1 from "../../public/assets/images/linevector1.svg";
import bgvector from "../../public/assets/images/bgvector.svg";
import opacvector from "../../public/assets/images/opacvector.svg";

const firstphase = [
  {
    title: "Phase 1: Inception and Research (Q2 2022 - Q4 2022)",
    roadmaplist: [
      {
        buttontext: "Done",
        title: "Q2 2022",
        subtitle:
          "Assembling the AQORDS team consisting of experts in supply chains, freight transportation, blockchain, and decentralized finance (DeFi).",
        description: "Setting up the foundational structure for the project.",
      },
      {
        buttontext: "Done",
        title: "Q3 2022",
        subtitle:
          "Conducting extensive market research to understand the dynamics of the European road freight transportation industry.",
        description:
          "Conceptualizing and refining the vision for the AQORDS platform.",
      },
      {
        buttontext: "Done",
        title: "Q4 2022",
        subtitle: "Finalizing the initial platform architecture and design. ",
        description: "Initiating the development phase.",
      },
    ],
  },
];

const thirdphase = [
  {
    title: "Phase 3: Pre-Sale and Platform Enhancements (Q3 2023 - Q4 2023).",
    roadmaplist: [
      {
        buttontext: "To do",
        title: "Q3 2023",
        subtitle:
          "Launching the pre-sale phase to secure strategic investments for platform development and liquidity pool formation. ",
        description:
          "Engaging with potential investors and conducting token sales.",
      },
      {
        buttontext: "To do",
        title: "Q2 2023",
        subtitle:
          "Initiating integration with the first freight exchange, Qoobus.",
        description:
          "Collaborating with Qoobus to establish seamless connectivity and data interoperability between AQORDS and the Qoobus platform. This integration aims to provide a testing environment for our Proof of Concept (first transaction).",
      },
    ],
  },
];

const firdphase = [
  {
    title: "Phase 4: Platform Launch and Expansion (Q1 2024 - onward).",
    roadmaplist: [
      {
        buttontext: "To do",
        title: "Q1 2024",
        subtitle:
          "Officially launching the AQORDS platform in the European road freight transportation market.",
        description:
          "Onboarding initial shippers, carriers, and freight forwarders to start utilizing the platform.",
      },
      {
        buttontext: "To do",
        title: "Beyond Q1 2024",
        subtitle:
          "Continuously expanding the user base and network effect of AQORDS.",
        description:
          "Enhancing platform features and functionalities based on user feedback and market demands. Exploring strategic partnerships and collaborations to expand into new European markets and foster global growth.",
      },
    ],
  },
];

const RoadMap = () => {
  const isScrolled = ScrollToggle({
    targetClasses: [
      "el-1",
      "el-2",
      "el-3",
      "el-4",
      "el-5",
      "el-6",
      "el-7",
      "el-8",
      "el-9",
      "el-10",
      "el-11",
      "el-12",
      "el-13",
    ],
    visibleClass: "visible",
  });

  const elementRef = useRef<HTMLDivElement>(null);
  const elementRef2 = useRef<HTMLDivElement>(null);
  const elementRef3 = useRef<HTMLDivElement>(null);
  const elementRef4 = useRef<HTMLDivElement>(null);
  const elementRef5 = useRef<HTMLDivElement>(null);
  const elementRef6 = useRef<HTMLDivElement>(null);
  const elementRef7 = useRef<HTMLDivElement>(null);
  const elementRef8 = useRef<HTMLDivElement>(null);
  const elementRef9 = useRef<HTMLDivElement>(null);
  const elementRef10 = useRef<HTMLDivElement>(null);
  const elementRef11 = useRef<HTMLDivElement>(null);
  const elementRef12 = useRef<HTMLDivElement>(null);
  const elementRef13 = useRef<HTMLDivElement>(null);

  useScrollClassChange({
    elementRefs: [
      elementRef,
      elementRef2,
      elementRef3,
      elementRef4,
      elementRef5,
      elementRef6,
      elementRef7,
      elementRef8,
      elementRef9,
      elementRef10,
      elementRef11,
      elementRef12,
      elementRef13,
    ],
    className: "original",
  });

  // const [isVisible, setIsVisible] = useState(false);

  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY;
  //   const targetPosition = document.getElementById("target-element").offsetTop;
  //   const windowHeight = window.innerHeight;

  //   if (scrollPosition > targetPosition - windowHeight / 2) {
  //     setIsVisible(true);

  //     // Установка задержки перед появлением картинки
  //     // 300 миллисекунд (0.3 секунды)
  //   } else {
  //     setIsVisible(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div className="max-w-[806px]  ">
      <div className="relative ">
        <div
          ref={elementRef}
          className={`absolute top-[-60px] sml:top-[-170px] sm:top-[-175px] md:top-[-120px] w-[3px] h-[120%] ${
            isScrolled["el-1"] ? "el-1 visible" : "el-1 original"
          }`}
          // style={{
          //   opacity: isVisible ? 1 : 0,
          //   transform: `translateY(${isVisible ? "0" : "-100%"})`,
          //   transition: "opacity 0.5s, transform 1s",
          // }}
          // id="target-element"
        >
          <Image src={fullline1} alt="fullline" />
        </div>

        <div
          ref={elementRef2}
          className={`absolute top-[6%] sml:top-[2%] sm:top-[3%] md:top-[39%] ${
            isScrolled["el-2"] ? "el-2 visible" : "el-2 original"
          }`}
        >
          <Image
            // style={{
            //   opacity: showImage ? 1 : 0,
            //   animation: `${showImage ? "fade-in 5s" : ""}`,
            // }}
            // className="absolute top-[-120px] sml:top-[-170px] sm:top-[-175px] md:top-[70%] "
            src={linevector1}
            alt="linevector1"
          />
        </div>
        <div
          ref={elementRef3}
          className={`absolute top-[39%] sml:top-[36%] sm:top-[36%] md:top-[8%] ${
            isScrolled["el-3"] ? "el-3 visible" : "el-3 original"
          }`}
        >
          <Image
            // style={{
            //   opacity: showImage ? 1 : 0,
            //   animation: `${showImage ? "fade-in 5s" : ""}`,
            // }}
            // className="absolute top-[-120px] sml:top-[-170px] sm:top-[-175px] md:top-[70%] "
            src={linevector1}
            alt="linevector1"
          />
        </div>
        {/* {showImage && (
          <Image
            ref={elementRef6}
            className={isScrolled["el-6"] ? "el-6 visible" : "el-6 original"}
            style={{
              opacity: showImage ? 1 : 0,
              animation: `${showImage ? "fade-in 1s" : ""}`,
            }}
            className="absolute top-[-120px] sml:top-[-170px] sm:top-[-175px] md:top-[8%] "
            src={linevector1}
            alt="linevector1"
          />
        )}

        {showImage && (
          <Image
            style={{
              opacity: showImage ? 1 : 0,
              animation: `${showImage ? "fade-in 3s" : ""}`,
            }}
            className="absolute top-[-120px] sml:top-[-170px] sm:top-[-175px] md:top-[39%] "
            src={linevector1}
            alt="linevector1"
          />
        )} */}
        <div
          ref={elementRef4}
          className={`absolute top-[69%] sml:top-[67%] sm:top-[69%] md:top-[70%] ${
            isScrolled["el-4"] ? "el-4 visible" : "el-4 original"
          }`}
        >
          <Image
            // style={{
            //   opacity: showImage ? 1 : 0,
            //   animation: `${showImage ? "fade-in 5s" : ""}`,
            // }}
            // className="absolute top-[-120px] sml:top-[-170px] sm:top-[-175px] md:top-[70%] "
            src={linevector1}
            alt="linevector1"
          />
        </div>

        <div className="relative ml-[36px] sm:ml-[90px]">
          <ul>
            {firstphase.map((item) => (
              <li className="mb-[165px] sm:mb-[360px]">
                <h1 className="leading-normal md:leading-[58px] md:text-[48px] text-[32px] font-bold mb-[80px] md:mb-[120px] tracking-[-1.5px] ">
                  {item.title}
                </h1>
                <ul>
                  {item.roadmaplist.map((item) => (
                    <li className="mb-[85px] sm:mb-[135px] lg:mb-[120px]">
                      <div className="w-[120px]">
                        <div className="rounded-full mb-[26px] bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]">
                          <div className=" leading-[20px] text-[12px] text-center rounded-full w-full bg-black p-[1px]">
                            {item.buttontext}
                          </div>
                        </div>
                      </div>

                      <div className="w-[316px] sm:w-[716px]">
                        <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
                          {item.title}
                        </h2>
                        <h3 className="font-man  mb-[40px] text-[16px] md:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[316px] sm:w-[716px]">
                          {item.subtitle}
                        </h3>
                        <p className="font-man text-[#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative">
        <div
          ref={elementRef5}
          className={`absolute top-[-60px] sml:top-[-170px] sm:top-[-175px] md:top-[-120px] w-[3px] h-[120%] ${
            isScrolled["el-5"] ? "el-5 visible" : "el-5 original"
          }`}
          // style={{
          //   opacity: isVisible ? 1 : 0,
          //   transform: `translateY(${isVisible ? "0" : "-100%"})`,
          //   transition: "opacity 0.5s, transform 1s",
          // }}
          // id="target-element"
        >
          <Image src={fullline1} alt="fullline" />
        </div>
        {/* {showImage && (
          <Image
            style={{
              opacity: showImage ? 1 : 0,
              animation: `${showImage ? "fade-in 1s" : ""}`,
            }}
            className="absolute top-[-120px] sml:top-[-170px] sm:top-[-175px] md:top-[7%] "
            src={linevector1}
            alt="linevector1"
          />
        )}
        {showImage && (
          <Image
            style={{
              opacity: showImage ? 1 : 0,
              animation: `${showImage ? "fade-in 3s" : ""}`,
            }}
            className="absolute top-[-120px] sml:top-[-170px] sm:top-[-175px] md:top-[37%] "
            src={bgvector}
            alt="linevector1"
          />
        )}
        {showImage && (
          <Image
            style={{
              opacity: showImage ? 1 : 0,
              animation: `${showImage ? "fade-in 5s" : ""}`,
            }}
            className="absolute top-[-120px] sml:top-[-170px] sm:top-[-175px] md:top-[68%] "
            src={opacvector}
            alt="linevector1"
          />
        )} */}

        <div
          ref={elementRef6}
          className={`absolute  top-[6%] sml:top-[3%] sm:top-[3%] md:top-[8%] ${
            isScrolled["el-6"] ? "el-6 visible" : "el-6 original"
          }`}
        >
          <Image
            // style={{
            //   opacity: showImage ? 1 : 0,
            //   animation: `${showImage ? "fade-in 5s" : ""}`,
            // }}
            // className="absolute top-[-120px] sml:top-[-170px] sm:top-[-175px] md:top-[70%] "
            src={linevector1}
            alt="linevector1"
          />
        </div>
        <div
          ref={elementRef7}
          className={` absolute  top-[35%] sml:top-[33%] sm:top-[34%] md:top-[37%] ${
            isScrolled["el-7"] ? "el-7 visible" : "el-7 original"
          }`}
        >
          <Image
            // style={{
            //   opacity: showImage ? 1 : 0,
            //   animation: `${showImage ? "fade-in 5s" : ""}`,
            // }}
            // className="absolute top-[-120px] sml:top-[-170px] sm:top-[-175px] md:top-[70%] "
            src={bgvector}
            alt="linevector1"
          />
        </div>
        <div
          ref={elementRef8}
          className={`absolute top-[65%] sml:top-[63%] sm:top-[67%] md:top-[68%] ${
            isScrolled["el-8"] ? "el-8 visible" : "el-8 original"
          }`}
        >
          <Image
            // style={{
            //   opacity: showImage ? 1 : 0,
            //   animation: `${showImage ? "fade-in 5s" : ""}`,
            // }}
            // className="absolute top-[-120px] sml:top-[-170px] sm:top-[-175px] md:top-[70%] "
            src={opacvector}
            alt="linevector1"
          />
        </div>

        <div className="mb-[165px] sm:mb-[363px] ml-[36px] sm:ml-[90px]">
          <div className="mb-[75px] sm:mb-[100px] md:mb-[95px] lg:mb-[120px]">
            <h1 className="leading-normal md:leading-[58px] md:text-[48px] text-[32px] font-bold mb-[80px] md:mb-[120px] tracking-[-1.5px]">
              Phase 2: Development and Testing (Q1 2023 - Q2 2023).
            </h1>
            <div className="w-[120px]">
              <div className="rounded-full mb-[26px] bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]">
                <div className=" leading-[20px] text-[12px] text-center rounded-full w-full bg-black p-[1px]">
                  Done
                </div>
              </div>
            </div>
            <div className="w-[316px] lg:w-[716px]">
              <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
                Q1 2023
              </h2>
              <h3 className="font-man  mb-[30px] text-[16px] md:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[316px] sm:w-[716px]">
                Commencing the development of the AQORDS platform.
              </h3>
              <p className="font-man text-[#838383]  text-[14px]  lg:text-[16px] tracking-[-0.3px] mb-[0px]">
                Building the core features, including smart contracts,
                track-and-trace functionality, and dispute resolution
                mechanisms.
              </p>
            </div>
          </div>
          <div className="mb-[23px] sm:mb-[140px]  lg:mb-[103px]">
            <div className="w-[145px] sm:w-[120px]">
              <div className="ml-[25px] sm:ml-0 rounded-full mb-[26px] bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]">
                <div className=" leading-[20px] text-[12px] text-center rounded-full w-full bg-gradient-to-br from-[#ADA785] to-[#8D794C] p-[1px]">
                  In progress
                </div>
              </div>
            </div>
            <div className="w-[316px] sm:w-[716px]">
              <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
                Q2 2023
              </h2>
              <h3 className="font-man  mb-[30px] text-[16px] md:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[316px] sm:w-[716px]">
                Initiating integration with the first freight exchange, Qoobus.
              </h3>
              <p className="font-man text-[#838383]  text-[14px]  lg:text-[16px] tracking-[-0.3px] mb-[0px]">
                Collaborating with Qoobus to establish seamless connectivity and
                data interoperability between AQORDS and the Qoobus platform.
                This integration aims to provide a testing environment for our
                Proof of Concept (first transaction).
              </p>
            </div>
          </div>
          <div className="w-[316px] sm:w-[716px]">
            <div className="w-[120px]">
              <div className="rounded-full mb-[26px] bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]">
                <div className=" leading-[20px] text-[12px] text-center rounded-full w-full bg-black p-[1px]">
                  To do
                </div>
              </div>
            </div>
            <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
              Q3 2022
            </h2>
            <h3 className="font-man  mb-[40px] text-[16px] md:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[316px] sm:w-[716px]">
              Conducting internal testing and refinement of the AQORDS platform.
            </h3>
            <p className="font-man text-[#838383]  text-[14px]  lg:text-[16px] tracking-[-0.3px] mb-[0px]">
              Collaborating with select partners and stakeholders for alpha
              testing and gathering valuable feedback for improvements.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          ref={elementRef9}
          className={`absolute top-[-60px] sml:top-[-170px] sm:top-[-175px] md:top-[-120px] w-[3px] h-[60%] ${
            isScrolled["el-9"] ? "el-9 visible" : "el-9 original"
          }`}
          // style={{
          //   opacity: isVisible ? 1 : 0,
          //   transform: `translateY(${isVisible ? "0" : "-100%"})`,
          //   transition: "opacity 0.5s, transform 1s",
          // }}
          // id="target-element"
        >
          <Image src={fullline2} alt="fullline" />
        </div>
        <div
          ref={elementRef10}
          className={`absolute top-[10%] sml:top-[4%] sm:top-[5%] md:top-[11%] ${
            isScrolled["el-10"] ? "el-10 visible" : "el-10 original"
          }`}
        >
          <Image
            // style={{
            //   opacity: showImage ? 1 : 0,
            //   animation: `${showImage ? "fade-in 5s" : ""}`,
            // }}
            // className="absolute top-[-120px] sml:top-[-170px] sm:top-[-175px] md:top-[70%] "
            src={opacvector}
            alt="linevector1"
          />
        </div>
        <div
          ref={elementRef11}
          className={`absolute top-[46%] sml:top-[43%] sm:top-[49%] md:top-[52%] lg:top-[49%] ${
            isScrolled["el-11"] ? "el-11 visible" : "el-11 original"
          }`}
        >
          <Image
            // style={{
            //   opacity: showImage ? 1 : 0,
            //   animation: `${showImage ? "fade-in 5s" : ""}`,
            // }}
            // className="absolute top-[-120px] sml:top-[-170px] sm:top-[-175px] md:top-[70%] "
            src={opacvector}
            alt="linevector1"
          />
        </div>

        <div className="ml-[36px] sm:ml-[90px]">
          <ul>
            {thirdphase.map((item) => (
              <li className="mb-[165px] sm:mb-[360px]">
                <h1 className="leading-normal md:leading-[58px] md:text-[48px] text-[32px] font-bold mb-[85px] lg:mb-[120px] md:mb-[60px] tracking-[-1.5px] ">
                  {item.title}
                </h1>
                <ul>
                  {item.roadmaplist.map((item) => (
                    <li className="mb-[35px] sm:mb-[85px] lg:mb-[65px]">
                      <div className="w-[120px]">
                        <div className="rounded-full mb-[26px] bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]">
                          <div className=" leading-[20px] text-[12px] text-center rounded-full w-full  bg-black  p-[1px]">
                            {item.buttontext}
                          </div>
                        </div>
                      </div>

                      <div className="w-[316px] sm:w-[716px]">
                        <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
                          {item.title}
                        </h2>
                        <h3 className="font-man  mb-[40px] text-[16px] md:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[315px] sm:w-[716px]">
                          {item.subtitle}
                        </h3>
                        <p className="font-man text-[#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative">
        <div
          ref={elementRef9}
          className={`absolute top-[-60px] sml:top-[-170px] sm:top-[-175px] md:top-[-120px] w-[3px] h-[110%] ${
            isScrolled["el-9"] ? "el-9 visible" : "el-9 original"
          }`}
          // style={{
          //   opacity: isVisible ? 1 : 0,
          //   transform: `translateY(${isVisible ? "0" : "-100%"})`,
          //   transition: "opacity 0.5s, transform 1s",
          // }}
          // id="target-element"
        >
          <Image src={fullline2} alt="fullline" />
        </div>

        <div
          ref={elementRef10}
          className={`absolute top-[6%] sml:top-[2%] sm:top-[3%] md:top-[7%]  ${
            isScrolled["el-10"] ? "el-10 visible" : "el-10 original"
          }`}
        >
          <Image
            // style={{
            //   opacity: showImage ? 1 : 0,
            //   animation: `${showImage ? "fade-in 5s" : ""}`,
            // }}
            // className="absolute top-[-120px] sml:top-[-170px] sm:top-[-175px] md:top-[70%] "
            src={opacvector}
            alt="linevector1"
          />
        </div>
        <div
          ref={elementRef11}
          className={`absolute top-[27%] sml:top-[27%] sm:top-[29%] md:top-[33%] lg:top-[31%] ${
            isScrolled["el-11"] ? "el-11 visible" : "el-11 original"
          }`}
        >
          <Image
            // style={{
            //   opacity: showImage ? 1 : 0,
            //   animation: `${showImage ? "fade-in 5s" : ""}`,
            // }}
            // className="absolute top-[-120px] sml:top-[-170px] sm:top-[-175px] md:top-[70%] "
            src={opacvector}
            alt="linevector1"
          />
        </div>
        <div className="ml-[36px] sm:ml-[90px]">
          <ul>
            {firdphase.map((item) => (
              <li className="mb-[120px]">
                <h1 className="leading-normal md:leading-[58px] md:text-[48px] text-[32px] font-bold mb-[80px] md:mb-[123px] tracking-[-1.5px] ">
                  {item.title}
                </h1>
                <ul>
                  {item.roadmaplist.map((item) => (
                    <li className="mb-[40px] sm:mb-[110px] md:mb-[85px] lg:mb-[55px]">
                      <div className="w-[120px]">
                        <div className="rounded-full mb-[26px] bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]">
                          <div className=" leading-[20px] text-[12px] text-center rounded-full w-full  bg-black  p-[1px]">
                            {item.buttontext}
                          </div>
                        </div>
                      </div>

                      <div className="w-[316px] sm:w-[716px]">
                        <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
                          {item.title}
                        </h2>
                        <h3 className="font-man  mb-[40px] text-[16px] md:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[315px] sm:w-[716px]">
                          {item.subtitle}
                        </h3>
                        <p className="font-man text-[#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <NodeCard
            title="Note"
            desc1="This roadmap provides a general overview of the timeline for AQORDS development, including the pre-sale phase."
            desc2="Actual dates and milestones may be subject to adjustments based on various factors, including market conditions, regulatory requirements, and technological advancements. AQORDS remains committed to delivering a robust and innovative platform that revolutionizes the road freight transportation industry."
          />
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
