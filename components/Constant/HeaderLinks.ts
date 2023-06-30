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
    name: "home",
    path: "/homepage",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "manifesto",
    path: "/manifesto",
  },
  {
    name: "how_it_works",
    path: "/howitworks",
  },
  {
    name: "whitepaper",
    path: "/whitepaper",
  },
  {
    name: "team",
    path: "/team",
  },
  {
    name: "road_map",
    path: "/roadmap",
  },
];
export const linksForMobile: Link[] = [
  {
    name: "how_it_does_works?",
    path: "/howitworks",
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
    name: "manifesto",
    path: "/manifesto",
    url: manifesto,
    bgLight:
      "absolute top-[90px] left-[-85px] w-[181px] h-[193px] opacity-40 background-light",
  },
  {
    name: "whitepaper",
    path: "/whitepaper",
    bgLight:
      "absolute top-[100px] left-[-85px] w-[181px] h-[193px] opacity-40 background-light ",
  },

  {
    name: "road_map",
    path: "/roadmap",
    bgLight:
      "absolute top-[70px] left-[-50px] w-[181px] h-[92px] opacity-40 background-light",
  },

  {
    name: "about_us",
    path: "/about",
    url: about,
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
