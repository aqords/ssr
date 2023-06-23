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
    path: "/1",
  },
  {
    name: "About",
    path: "/2",
  },
  {
    name: "Manifesto",
    path: "/3",
  },
  {
    name: "How it works",
    path: "/4",
  },
  {
    name: "Whitepaper",
    path: "/5",
  },
  {
    name: "Team",
    path: "/6",
  },
  {
    name: "Road map",
    path: "/7",
  },
];
export const linksForMobile: Link[] = [
  {
    name: "How it does works?",
    path: "/1",
    bgLight:
      "absolute top-[100px] left-[-85px] w-[181px] h-[193px] opacity-40 background-light ",
  },
  {
    name: "Manifesto",
    path: "/2",
    url: manifesto,
    bgLight:
      "absolute top-[90px] left-[-85px] w-[181px] h-[193px] opacity-40 background-light",
  },
  {
    name: "Whitepapper",
    path: "/3",
    bgLight:
      "absolute top-[70px] left-[-50px] w-[181px] h-[92px] opacity-40 background-light",
  },
  {
    name: "Road map",
    path: "/4",
    bgLight:
      "absolute top-[70px] left-[-75px] w-[181px] h-[316px] opacity-40 background-light",
  },
  {
    name: "About US",
    path: "/5",
    url: about,
    bgLight:
      "absolute top-[40px] left-[-115px] w-[181px] h-[316px] opacity-40 background-light",
  },
  {
    name: "Our team",
    path: "/6",
    bgLight:
      "absolute top-[50px] left-[-65px] w-[181px] h-[316px] opacity-40 background-light",
  },
];
