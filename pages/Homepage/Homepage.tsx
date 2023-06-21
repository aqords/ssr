import React from "react";
import dynamic from "next/dynamic";

const WhyAccords = dynamic(
  () => import("../../components/Whyaccords/WhyAccords")
);
const Upperblock = dynamic(
  () => import("../../components/Upperblock/Upperblock")
);
const Navigationblock = dynamic(
  () => import("../../components/Navigationblock/Navigationblock")
);
const Homepage = () => {
  return (
    <>
      <Upperblock />
      <WhyAccords />
      <Navigationblock />
    </>
  );
};

export default Homepage;
