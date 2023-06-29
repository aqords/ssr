import { Routes } from "../Constant/Routes";

interface Link {
  name: string;
  path: string;
}

export const LinksForLearn: Link[] = [
  {
    name: "About",
    path: Routes[1].path,
  },
  {
    name: "How it works",
    path: Routes[3].path,
  },
  {
    name: "Manifesto",
    path: Routes[2].path,
  },
  {
    name: "Whitepaper",
    path: Routes[4].path,
  },
];
export const LinkForExplore: Link[] = [
  {
    name: "Road map",
    path: Routes[6].path,
  },
  {
    name: "Team",
    path: Routes[5].path,
  },
  {
    name: "Contact us",
    path: Routes[7].path,
  },
];
