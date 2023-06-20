import React from "react";

import InfoCard from "../UI/InfoCard.tsx/InfoCard";
import bull from "../../public/assets/images/bull.svg";
import planet from "../../public/assets/images/planet.svg";

interface Data {
  title: string;
  desc: string;
  url?: string;
}

export const db: Data[] = [
  {
    title: "How it does works?",
    desc: "Our goal is to provide a seamless and transparent experience for all parties involved, from shippers and carriers to freight exchange platforms.",
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
    desc: "Our core focus is to leverage the power of blockchain technology to streamline contract execution, enable instant payments, and enhance security throughout the entire logistics process.",
    url: bull,
  },
  {
    title: "Our team",
    desc: "We are a team of visionaries, technologists, and industry experts dedicated to revolutionizing the freight transportation landscape through blockchain innovation.",
  },
];

const Navigationblock = () => {
  return (
    <div className="container py-[120px]">
      <InfoCard title={db[0].title} desc={db[0].desc} />
      <span className="block h-[1px] w-full span-gradient my-[60px]"></span>
      <div className="flex flex-wrap lg:flex-nowrap">
        <InfoCard
          title={db[1].title}
          desc={db[1].desc}
          img={db[1].url}
          imgStyle={
            "relative top-[0px] left-[135px]  md:left-[260px] lg:left-[60px]"
          }
        />
        <div className="flex flex-col">
          <InfoCard title={db[2].title} desc={db[2].desc} />
          <InfoCard title={db[3].title} desc={db[3].desc} />
        </div>
      </div>
      <span className="block h-[1px] w-full span-gradient my-[60px]"></span>
      <InfoCard
        title={db[4].title}
        desc={db[4].desc}
        img={db[4].url}
        imgStyle={
          "max-w-none md:relative top-[0px] md:left-[280px] lg:left-[0px]"
        }
        flex={"flex flex-col items-end md:items-start  lg:flex-row-reverse"}
      />
      <span className="block h-[0px] my-[60px]"></span>
      <InfoCard title={db[5].title} desc={db[5].desc} />
    </div>
  );
};

export default Navigationblock;
