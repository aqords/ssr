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
    path: "/homepage",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Manifesto",
    path: "/manifesto",
  },
  {
    name: "How it works",
    path: "/howitworks",
  },
  {
    name: "Whitepaper",
    path: "/whitepaper",
  },
  {
    name: "Team",
    path: "/team",
  },
  {
    name: "Road map",
    path: "/roadmap",
  },
];
export const linksForMobile: Link[] = [
  {
    name: "How it does works?",
    path: "/howitworks",
    bgLight:
      "absolute top-[100px] left-[-85px] w-[181px] h-[193px] opacity-40 background-light ",
  },
  {
    name: "Manifesto",
    path: "/manifesto",
    url: manifesto,
    bgLight:
      "absolute top-[90px] left-[-85px] w-[181px] h-[193px] opacity-40 background-light",
  },
  {
    name: "Whitepapper",
    path: "/whitepaper",
    bgLight:
      "absolute top-[70px] left-[-50px] w-[181px] h-[92px] opacity-40 background-light",
  },
  {
    name: "Road map",
    path: "/roadmap",
    bgLight:
      "absolute top-[70px] left-[-75px] w-[181px] h-[316px] opacity-40 background-light",
  },
  {
    name: "About US",
    path: "/about",
    url: about,
    bgLight:
      "absolute top-[40px] left-[-115px] w-[181px] h-[316px] opacity-40 background-light",
  },
  {
    name: "Our team",
    path: "/team",
    bgLight:
      "absolute top-[50px] left-[-65px] w-[181px] h-[316px] opacity-40 background-light",
  },
];
