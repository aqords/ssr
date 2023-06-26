import manifesto from "../../public/assets/images/manifesto-btn.svg";
import about from "../../public/assets/images/aboutus-btn.svg";

interface Link {
  name: string;
  path: string;
  url?: string;
  bgLight?: string;
}

export const linksForDesktop: Link[] = [
  {
    name: "Home",
    path: "/homepage/homepage",
  },
  {
    name: "About",
    path: "/about/about",
  },
  {
    name: "Manifesto",
    path: "/manifesto/manifesto",
  },
  {
    name: "How it works",
    path: "/howitworks/howitworks",
  },
  {
    name: "Whitepaper",
    path: "/whitepaper/whitepaper",
  },
  {
    name: "Team",
    path: "/team/team",
  },
  {
    name: "Road map",
    path: "/roadmap/roadmap",
  },
];
export const linksForMobile: Link[] = [
  {
    name: "How it does works?",
    path: "/howitworks/howitworks",
    bgLight:
      "absolute top-[100px] left-[-85px] w-[181px] h-[193px] opacity-40 background-light ",
  },
  {
    name: "Manifesto",
    path: "/manifesto/manifesto",
    url: manifesto,
    bgLight:
      "absolute top-[90px] left-[-85px] w-[181px] h-[193px] opacity-40 background-light",
  },
  {
    name: "Whitepapper",
    path: "/whitepaper/whitepaper",
    bgLight:
      "absolute top-[70px] left-[-50px] w-[181px] h-[92px] opacity-40 background-light",
  },
  {
    name: "Road map",
    path: "/roadmap/roadmap",
    bgLight:
      "absolute top-[70px] left-[-75px] w-[181px] h-[316px] opacity-40 background-light",
  },
  // {
  //   name: "About US",
  //   path: "/about/about",
  //   url: about,
  //   bgLight:
  //     "absolute top-[40px] left-[-115px] w-[181px] h-[316px] opacity-40 background-light",
  // },
  {
    name: "Our team",
    path: "/team/team",
    bgLight:
      "absolute top-[50px] left-[-65px] w-[181px] h-[316px] opacity-40 background-light",
  },
];
