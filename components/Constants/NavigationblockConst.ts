import { StaticImageData } from "next/image";
import bull from "../../public/assets/images/bull.svg";
import planet from "../../public/assets/images/planet1.png";
import { Routes } from "./Routes";

interface Data {
  title: string;
  desc: string;
  href: string;
  url?: StaticImageData;
  bgLight?: string;
}

export const NavigationblockData: Data[] = [
  {
    href: Routes[3].path,
    title: "navblock1_title",
    desc: "navblock1_desc",
    bgLight:
      "absolute md:opacity-40 md:background-light md:top-[287px] md:left-[-233px] md:w-[556px] md:h-[556px]",
  },
  {
    title: "navblock2_title",
    desc: "navblock2_desc",
    url: planet,
    href: Routes[2].path,
  },
  {
    title: "navblock3_title",
    desc: "navblock3_desc",
    href: Routes[4].path,
  },
  {
    title: "navblock4_title",
    desc: "navblock4_desc",
    href: Routes[6].path,
  },
  {
    title: "navblock5_title",
    desc: "navblock5_desc",
    url: bull,
    bgLight:
      "absolute opacity-40 background-light top-[-216px] left-[270px] w-[535px] h-[535px] md:top-[254px] md:left-[771px] md:w-[625px] md:h-[625px]",
    href: Routes[1].path,
  },
  {
    title: "navblock6_title",
    desc: "navblock6_desc",
    bgLight:
      "absolute md:opacity-40 md:background-light md:top-[317px] md:left-[-233px] md:w-[556px] md:h-[556px]",
    href: Routes[5].path,
  },
];
