import { Routes } from "./Routes";

interface Link {
  name: string;
  path: string;
}

export const LinksForLearn: Link[] = [
  {
    name: "about",
    path: "/about",
  },
  {
    name: "how_it_works",
    path: "/howitworks",
  },
  {
    name: "manifesto",
    path: "/manifesto",
  },
  {
    name: "whitepaper",
    path: "/whitepaper",
  },
];
export const LinkForExplore: Link[] = [
  {
    name: "road_map",
    path: "/roadmap",
  },
  {
    name: "team",
    path: "/team",
  },
  {
    name: "contact_us",
    path: "/contact",
  },
];
