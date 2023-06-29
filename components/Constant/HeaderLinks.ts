import manifesto from "../../public/assets/images/manifesto-btn.svg";
import about from "../../public/assets/images/aboutus-btn.svg";
import { Routes } from "../Constant/Routes";

interface Link {
  name: string;
  path: string;
  url?: string;
  bgLight?: string;
}

export const linksForDesktop: Link[] = [
  {
    name: "Home",
    path: Routes[0].path,
  },
  {
    name: "About",
    path: Routes[1].path,
  },
  {
    name: "Manifesto",
    path: Routes[2].path,
  },
  {
    name: "How it works",
    path: Routes[3].path,
  },
  {
    name: "Whitepaper",
    path: Routes[4].path,
  },
  {
    name: "Team",
    path: Routes[5].path,
  },
  {
    name: "Road map",
    path: Routes[6].path,
  },
];
export const linksForMobile: Link[] = [
  {
    name: "Home",
    path: Routes[0].path,
    bgLight:
      "absolute top-[40px] left-[-115px] w-[181px] h-[316px] opacity-40 background-light",
  },
  {
    name: "About US",
    path: Routes[1].path,
    url: about,
    bgLight:
      "absolute top-[40px] left-[-115px] w-[181px] h-[316px] opacity-40 background-light",
  },
  {
    name: "Manifesto",
    path: Routes[2].path,
    url: manifesto,
    bgLight:
      "absolute top-[90px] left-[-85px] w-[181px] h-[193px] opacity-40 background-light",
  },
  {
    name: "How it does works?",
    path: Routes[3].path,
    bgLight:
      "absolute top-[100px] left-[-85px] w-[181px] h-[193px] opacity-40 background-light ",
  },

  {
    name: "Whitepapper",
    path: Routes[4].path,
    bgLight:
      "absolute top-[70px] left-[-50px] w-[181px] h-[92px] opacity-40 background-light",
  },

  {
    name: "Our team",
    path: Routes[5].path,
    bgLight:
      "absolute top-[50px] left-[-65px] w-[181px] h-[316px] opacity-40 background-light",
  },
  {
    name: "Road map",
    path: Routes[6].path,
    bgLight:
      "absolute top-[70px] left-[-75px] w-[181px] h-[316px] opacity-40 background-light",
  },
];
