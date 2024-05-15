import { Routes } from "./Routes";

interface Link {
  name: string;
  path: string;
}

export const LinksForLearn: Link[] = [
  {
    name: "about",
    path: Routes[1].path,
  },
  {
    name: "how_it_works",
    path: Routes[3].path,
  },
  {
    name: "manifesto",
    path: Routes[2].path,
  },
  {
    name: "whitepaper",
    path: Routes[4].path,
  },
];
export const LinkForExplore: Link[] = [
  {
    name: "road_map",
    path: Routes[6].path,
  },
  // {
  //   name: "team",
  //   path: Routes[5].path,
  // },
  {
    name: "contact_us",
    path: Routes[7].path,
  },
];
