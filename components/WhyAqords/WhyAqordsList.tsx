import React from "react";
import Item from "./WhyAqordsItem";
import { whyAqordsList } from "../Constant/WhyAqordsItems";

const WhyAqordsList = () => {
  return (
    <div className="pb-[120px]">
      <ul>
        {whyAqordsList.map((item) => (
          <Item key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default WhyAqordsList;
