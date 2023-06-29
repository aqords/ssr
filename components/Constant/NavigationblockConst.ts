import bull from "../../public/assets/images/bull.svg";
import planet from "../../public/assets/images/planet.svg";

interface Data {
  title: string;
  desc: string;
  url?: string;
  bgLight?: string;
}

export const NavigationblockData: Data[] = [
  {
    title: "navblock1_title",
    desc: "navblock1_desc",
    bgLight:
      "absolute md:opacity-40 md:background-light md:top-[287px] md:left-[-233px] md:w-[556px] md:h-[556px]",
  },
  {
    title: "navblock2_title",
    desc: "navblock2_desc",
  },
  {
    title: "navblock3_title",
    desc: "navblock3_desc",
  },
  {
    title: "navblock4_title",
    desc: "navblock4_desc",
  },
  {
    title: "navblock5_title",
    desc: "navblock5_desc",
    url: bull,
    bgLight:
      "absolute opacity-40 background-light top-[-216px] left-[270px] w-[535px] h-[535px] md:top-[254px] md:left-[771px] md:w-[625px] md:h-[625px]",
  },
  {
    title: "navblock6_title",
    desc: "navblock6_desc",
    bgLight:
      "absolute md:opacity-40 md:background-light md:top-[287px] md:left-[-233px] md:w-[556px] md:h-[556px]",
  },
];
