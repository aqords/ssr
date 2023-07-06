import manifesto from "../../public/assets/images/manifesto-btn.png";
import about from "../../public/assets/images/aboutus-btn.svg";
import { Routes } from "./Routes";

interface Link {
  name: string;
  path: string;
  url?: string;
  bgLight?: string;
}

export const linksForDesktop: Link[] = [
  {
    name: "home",
    path: Routes[0].path,
  },
  {
    name: "about",
    path: Routes[1].path,
  },
  {
    name: "manifesto",
    path: Routes[2].path,
  },
  {
    name: "how_it_works",
    path: Routes[3].path,
  },
  {
    name: "whitepaper",
    path: Routes[4].path,
  },
  {
    name: "team",
    path: Routes[5].path,
  },
  {
    name: "road_map",
    path: Routes[6].path,
  },
];
export const linksForMobile: Link[] = [
  {
    name: "home",
    path: Routes[0].path,
    bgLight:
      "absolute top-[40px] left-[-75px] w-[181px] h-[316px] opacity-50 background-light",
  },
  {
    name: "about",
    path: Routes[1].path,
    url: about,
    bgLight:
      "absolute top-[40px] left-[-75px] w-[181px] h-[316px] opacity-50 background-light",
  },
  {
    name: "manifesto",
    path: Routes[2].path,
    url: manifesto,
    bgLight:
      "absolute top-[40px] left-[-75px] w-[181px] h-[316px] opacity-50 background-light",
  },
  {
    name: "how_it_does_works",
    path: Routes[3].path,
    bgLight:
      "absolute top-[40px] left-[-115px] w-[181px] h-[316px] opacity-50 background-light",
  },
  {
    name: "whitepaper",
    path: Routes[4].path,
    bgLight:
      "absolute top-[40px] left-[-75px] w-[181px] h-[316px] opacity-50 background-light",
  },
  {
    name: "team",
    path: Routes[5].path,
    bgLight:
      "absolute top-[40px] left-[-75px] w-[181px] h-[316px] opacity-50 background-light",
  },
  {
    name: "road_map",
    path: Routes[6].path,
    bgLight:
      "absolute top-[40px] left-[-75px] w-[181px] h-[316px] opacity-50 background-light",
  },
  {
    name: "faq",
    path: Routes[6].path,
    bgLight:
      "absolute top-[40px] left-[-75px] w-[181px] h-[316px] opacity-50 background-light",
  },
];
