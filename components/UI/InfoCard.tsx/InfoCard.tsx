import React from "react";
import Button from "../Button/Button";

interface ComponentProps {
  title: string;
  desc: string;
  img?: string;
}

const InfoCard: React.FC<ComponentProps> = ({ title, desc }) => {
  return (
    <div>
      <h3 className="text-[40px] ">{title}</h3>
      <p className="text-[20px]  text-[#838383]  font-man">{desc}</p>
      <Button>
        <p className="mx-[60px] text-[20px]font-man">View more</p>
      </Button>
    </div>
  );
};

export default InfoCard;
