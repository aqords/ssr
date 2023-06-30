import React from "react";
import Image from "next/image";

import Button from "../UI/Button/Button";
import NodeCard from "../UI/InfoCard.tsx/NodeCard";
import left1 from "../../public/assets/images/svgleft1.svg";
import left2 from "../../public/assets/images/svgleft2.svg";
import left3 from "../../public/assets/images/svgleft3.svg";
import left4 from "../../public/assets/images/svgleft4.svg";

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
  return (
    <div className="max-w-[806px]  ">
      <div className="relative">
        <div className="absolute top-[-120px] sml:top-[-170px] sm:top-[-175px] md:top-[-120px]">
          <Image src={left1} alt="left1" />
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
        <div className="absolute top-[-130px] sml:top-[-175px]  sm:top-[-175px] md:top-[-120px]">
          <Image src={left2} alt="left2" />
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
        <div className="absolute top-[-135px] sml:top-[-130px] smx:top-[-180px] sm:top-[-180px] md:top-[-120px]">
          <Image src={left3} alt="left3" />
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
        <div className="absolute top-[-135px] sml:top-[-130px] smx:top-[-180px] sm:top-[-182px] md:top-[-120px]">
          <Image src={left4} alt="left4" />
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
