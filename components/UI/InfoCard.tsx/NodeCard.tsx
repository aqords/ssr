import React from "react";

interface NodeCardProps {
  title: string;
  desc1?: string;
  desc2?: string;
}
const NodeCard: React.FC<NodeCardProps> = ({ title, desc1, desc2 }) => {
  return (
    <div className="p-[24px] orangeb">
      <h5 className="text-[24px] font-bold mb-[40px]">{title}</h5>
      <p className="font-man block mb-[30px] text-[18px]">{desc1}</p>
      <p className="leading-[1.2rem] sm:leading-0 font-man mb-[55px] text-[16px]  text-[#838383]">
        {desc2}
      </p>
    </div>
  );
};

export default NodeCard;
