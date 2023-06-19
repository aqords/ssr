import React from "react";
import Button from "../UI/Button/Button";
import InfoCard from "../UI/InfoCard.tsx/InfoCard";

const Navigationblock = () => {
  return (
    <div className="container">
      <span className="block h-[1px] w-full span-gradient my-[60px]"></span>
      <div className="">
        <Button
          outsideGradient={
            "rounded-[19px] hover:bg-gradient-to-r from-[#080809]  to-[#c6b38a] p-[2px]"
          }
          insideGradient={
            "rounded-[19px] bg-gradient-to-r from-[#27241d]  to-[#0e0e0d] p-[1px]"
          }
        >
          <InfoCard
            title={"How it does works?"}
            desc={
              "Our goal is to provide a seamless and transparent experience for all parties involved, from shippers and carriers to freight exchange platforms."
            }
          />
        </Button>
      </div>
      <span className="block h-[1px] w-full span-gradient my-[60px]"></span>
    </div>
  );
};

export default Navigationblock;
