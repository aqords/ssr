import manifesto from "../../public/assets/images/manifesto-btn.png";
import about from "../../public/assets/images/aboutus-btn.svg";
import { Routes } from "./Routes";

interface Link {
  name: string;
  path: string;
  url?: string;
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
  // {
  //   name: "team",
  //   path: Routes[5].path,
  // },
  {
    name: "road_map",
    path: Routes[6].path,
  },
  {
    name: "faq",
    path: Routes[13].path,
  },
];
export const linksForMobile: Link[] = [
  {
    name: "home",
    path: Routes[0].path,
  },
  {
    name: "about",
    path: Routes[1].path,
    url: about,
  },
  {
    name: "manifesto",
    path: Routes[2].path,
    url: manifesto,
  },
  {
    name: "how_it_does_works",
    path: Routes[3].path,
  },
  {
    name: "whitepaper",
    path: Routes[4].path,
  },
  // {
  //   name: "team",
  //   path: Routes[5].path,
  // },
  {
    name: "road_map",
    path: Routes[6].path,
  },
  {
    name: "faq",
    path: Routes[13].path,
  },
  {
    name: "contact_us",
    path: Routes[7].path,
  },
];
