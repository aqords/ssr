import React, { useRef } from "react";
import ScrollToggle from "../../utils/hooks/ScrollToggle";
import useScrollClassChange from "../../utils/hooks/useScrollChange";

import InfoCard from "../UI/InfoCard.tsx/InfoCard";
import bull from "../../public/assets/images/bull.svg";
import planet from "../../public/assets/images/planet.svg";

interface Data {
  title: string;
  desc: string;
  url?: string;
  bgLight?: string;
}

export const db: Data[] = [
  {
    title: "How it does works?",
    desc: "Our goal is to provide a seamless and transparent experience for all parties involved, from shippers and carriers to freight exchange platforms.",
    bgLight:
      "absolute md:opacity-40 md:background-light md:top-[287px] md:left-[-233px] md:w-[556px] md:h-[556px]",
  },
  {
    title: "Manifesto",
    desc: "It is our mission to revolutionize this industry by harnessing the power of blockchain technology and decentralized solutions.",
    url: planet,
  },
  {
    title: "Whitepapper",
    desc: "Discover the transformative power of AQORDS in our concise whitepaper. Explore the technical details, benefits, and future developments of our blockchain platform for freight transportation. Unleash the potential of smart contracts, decentralized finance integration, and seamless collaboration among shippers, carriers, and supply chain partners.",
  },
  {
    title: "Roadmap",
    desc: "Q2 2022: Assembling the AQORDS team consisting of experts in supply chains, freight transportation, blockchain, and decentralized finance (DeFi). Setting up the foundational structure for the project.",
  },
  {
    title: "About us",
    desc: `Our core focus is to leverage the power of blockchain technology to streamline contract execution, enable  instant payments, and enhance security throughout the entire logistics process.`,
    url: bull,
    bgLight:
      "absolute opacity-40 background-light top-[-216px] left-[270px] w-[535px] h-[535px] md:top-[254px] md:left-[771px] md:w-[625px] md:h-[625px]",
  },
  {
    title: "Our team",
    desc: "We are a team of visionaries, technologists, and industry experts dedicated to revolutionizing the freight transportation landscape through blockchain innovation.",
    bgLight:
      "absolute md:opacity-40 md:background-light md:top-[287px] md:left-[-233px] md:w-[556px] md:h-[556px]",
  },
];

const Navigationblock = () => {
  const isScrolled = ScrollToggle({
    targetClasses: ["el-1", "el-2", "el-3", "el-4"],
    visibleClass: "visible",
    originalClass: "original",
  });

  const elementRef = useRef<HTMLDivElement>(null);

  useScrollClassChange({
    elementRef,
    className: "original",
  });

  return (
    <div className="container py-[120px]">
      <div>
        <div
          ref={elementRef}
          className={isScrolled["el-4"] ? "el-4 visible" : "el-4 original"}
        >
          <InfoCard
            title={db[0].title}
            desc={db[0].desc}
            bgLight={db[0].bgLight}
          />
        </div>
      </div>
      <span className="block h-[1px] w-full span-gradient my-[60px]"></span>
      <div className="flex flex-wrap lg:flex-nowrap gap-[16px]">
        <InfoCard
          title={db[1].title}
          desc={db[1].desc}
          img={db[1].url}
          imgStyle={
            "relative top-[-20px] left-[105px]  md:left-[260px] lg:left-[60px]"
          }
          imgWrapper={
            "w-[274px] h-[318px] sm:w-auto sm:h-auto scale-[1.7] sm:scale-[1]"
          }
        />
        <div className="flex flex-col gap-[18px]">
          <InfoCard title={db[2].title} desc={db[2].desc} />
          <InfoCard title={db[3].title} desc={db[3].desc} />
        </div>
      </div>
      <span className="hidden md:block h-[1px] w-full span-gradient my-[60px]"></span>
      <div className={isScrolled["el-2"] ? "el-2 visible" : "el-2 original"}>
        <InfoCard
          title={db[4].title}
          desc={db[4].desc}
          img={db[4].url}
          imgStyle={
            "relative left-[-70px] top-[-60px] max-w-none md:relative md:left-[385px] lg:left-[-135px] lg:top-[0px]"
          }
          imgWrapper={"w-[274px] h-[318px] scale-[0.85] lg:scale-[1]"}
          flex={"flex flex-col items-end md:items-start  lg:flex-row-reverse"}
          bgLight={db[4].bgLight}
        />
      </div>
      <span className="block h-[0px] my-[60px]"></span>
      <div className={isScrolled["el-1"] ? "el-1 visible" : "el-1 original"}>
        <InfoCard
          title={db[5].title}
          desc={db[5].desc}
          bgLight={db[5].bgLight}
        />
      </div>
    </div>
  );
};

export default Navigationblock;
