import React from "react";
import WhyAqordsItem from "./WhyAqordsItem";
import { renderObject } from "../Constant/WhyAqordsItems";

interface WhyAqordsListProps {
  itemsArray: renderObject[];
}

const WhyAqordsList = ({ itemsArray }: WhyAqordsListProps) => {
  return (
    <div className="pb-[120px]">
      <ul>
        {itemsArray?.map((obj) => (
          <WhyAqordsItem
            key={obj.title}
            text={obj.text}
            description={obj.description}
            icon={obj.icon}
            topicon={obj.topicon}
            title={obj.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default WhyAqordsList;
