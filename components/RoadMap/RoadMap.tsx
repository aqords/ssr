import React from "react";
import Button from "../UI/Button/Button";
import NodeCard from "../UI/InfoCard.tsx/NodeCard";
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

const secondphasetodo = [
  {
    title: "Q3 2022",
    subtitle:
      "Conducting internal testing and refinement of the AQORDS platform.",
    description:
      "Collaborating with select partners and stakeholders for alpha testing and gathering valuable feedback for improvements.",
  },
];
const lastphases = [
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
    <div className="max-w-[716px] ">
      <div className="">
        <ul>
          {firstphase.map((item) => (
            <li className="mb-[360px]">
              <h1 className="leading-[58px] text-[48px] font-bold mb-[120px] tracking-[-1.5px] ">
                {item.title}
              </h1>
              <ul>
                {item.roadmaplist.map((item) => (
                  <li className="mb-[120px]">
                    <div className="w-[120px]">
                      <div className="rounded-full mb-[26px] bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]">
                        <div className=" leading-[20px] text-[12px] text-center rounded-full w-full bg-black p-[1px]">
                          {item.buttontext}
                        </div>
                      </div>
                    </div>

                    <div className="w-[716px]">
                      <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
                        {item.title}
                      </h2>
                      <h3 className="font-man text-[15px] mb-[40px] lg:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[716px]">
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

      <div className="mb-[363px]">
        <div className="mb-[120px]">
          <h1 className="leading-[58px] text-[48px] font-bold mb-[120px] tracking-[-1.5px]">
            Phase 2: Development and Testing (Q1 2023 - Q2 2023).
          </h1>
          <div className="w-[120px]">
            <div className="rounded-full mb-[26px] bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]">
              <div className=" leading-[20px] text-[12px] text-center rounded-full w-full bg-black p-[1px]">
                Done
              </div>
            </div>
          </div>
          <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
            Q1 2023
          </h2>
          <h3 className="font-man text-[15px] mb-[40px] lg:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[716px]">
            Commencing the development of the AQORDS platform.
          </h3>
          <p className="font-man text-[#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
            Building the core features, including smart contracts,
            track-and-trace functionality, and dispute resolution mechanisms.
          </p>
        </div>
        <div className="mb-[120px]">
          <div className="w-[120px]">
            <div className="rounded-full mb-[26px] bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]">
              <div className=" leading-[20px] text-[12px] text-center rounded-full w-full bg-gradient-to-br from-[#ADA785] to-[#8D794C] p-[1px]">
                In progress
              </div>
            </div>
          </div>
          <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
            Q2 2023
          </h2>
          <h3 className="font-man text-[15px] mb-[40px] lg:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[716px]">
            Initiating integration with the first freight exchange, Qoobus.
          </h3>
          <p className="font-man text-[#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
            Collaborating with Qoobus to establish seamless connectivity and
            data interoperability between AQORDS and the Qoobus platform. This
            integration aims to provide a testing environment for our Proof of
            Concept (first transaction).
          </p>
        </div>
        <div className="">
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
          <h3 className="font-man text-[15px] mb-[40px] lg:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[716px]">
            Conducting internal testing and refinement of the AQORDS platform.
          </h3>
          <p className="font-man text-[#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
            Collaborating with select partners and stakeholders for alpha
            testing and gathering valuable feedback for improvements.
          </p>
        </div>
      </div>

      <div className="">
        <ul>
          {lastphases.map((item) => (
            <li className="mb-[360px]">
              <h1 className="leading-[58px] text-[48px] font-bold mb-[120px] tracking-[-1.5px] ">
                {item.title}
              </h1>
              <ul>
                {item.roadmaplist.map((item) => (
                  <li className="mb-[120px]">
                    <div className="w-[120px]">
                      <div className="rounded-full mb-[26px] bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] p-[1px]">
                        <div className=" leading-[20px] text-[12px] text-center rounded-full w-full  bg-black  p-[1px]">
                          {item.buttontext}
                        </div>
                      </div>
                    </div>

                    <div className="w-[716px]">
                      <h2 className="text-[40px] font-bold tracking-[-0.8px] leading-[64px] mb-[10px]">
                        {item.title}
                      </h2>
                      <h3 className="font-man text-[15px] mb-[40px] lg:text-[20px] leading-[1.5rem] lg:leading-[32px] lg:tracking-[-0.45px] w-[716px]">
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

      <NodeCard
        title="Node"
        desc1="This roadmap provides a general overview of the timeline for AQORDS development, including the pre-sale phase."
        desc2="Actual dates and milestones may be subject to adjustments based on various factors, including market conditions, regulatory requirements, and technological advancements. AQORDS remains committed to delivering a robust and innovative platform that revolutionizes the road freight transportation industry."
      />
    </div>
  );
};

export default RoadMap;
