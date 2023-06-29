import bull from "../../public/assets/images/bull.svg";
import planet from "../../public/assets/images/planet.svg";
import { Routes } from "../Constant/Routes";

interface Data {
  title: string;
  desc: string;
  href: string;
  url?: string;
  bgLight?: string;
}

export const NavigationblockData: Data[] = [
  {
    title: "How does it works?",
    desc: "Our goal is to provide a seamless and transparent experience for all parties involved, from shippers and carriers to freight exchange platforms.",
    href: Routes[3].path,
    bgLight:
      "absolute md:opacity-40 md:background-light md:top-[287px] md:left-[-233px] md:w-[556px] md:h-[556px]",
  },
  {
    title: "Manifesto",
    desc: "It is our mission to revolutionize this industry by harnessing the power of blockchain technology and decentralized solutions.",
    url: planet,
    href: Routes[2].path,
  },
  {
    title: "Whitepapper",
    desc: "Discover the transformative power of AQORDS in our concise whitepaper. Explore the technical details, benefits, and future developments of our blockchain platform for freight transportation. Unleash the potential of smart contracts, decentralized finance integration, and seamless collaboration among shippers, carriers, and supply chain partners.",
    href: Routes[4].path,
  },
  {
    title: "Roadmap",
    desc: "Q2 2022: Assembling the AQORDS team consisting of experts in supply chains, freight transportation, blockchain, and decentralized finance (DeFi). Setting up the foundational structure for the project.",
    href: Routes[6].path,
  },
  {
    title: "About us",
    desc: `Our core focus is to leverage the power of blockchain technology to streamline contract execution, enable  instant payments, and enhance security throughout the entire logistics process.`,
    url: bull,
    bgLight:
      "absolute opacity-40 background-light top-[-216px] left-[270px] w-[535px] h-[535px] md:top-[254px] md:left-[771px] md:w-[625px] md:h-[625px]",
    href: Routes[1].path,
  },
  {
    title: "Our team",
    desc: "We are a team of visionaries, technologists, and industry experts dedicated to revolutionizing the freight transportation landscape through blockchain innovation.",
    bgLight:
      "absolute md:opacity-40 md:background-light md:top-[287px] md:left-[-233px] md:w-[556px] md:h-[556px]",
    href: Routes[5].path,
  },
];
