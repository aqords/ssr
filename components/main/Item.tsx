import React from "react";

const Item = ({ item }: any) => {
  return (
    <li className=" pt-[60px] md:pt-[120px]">
      <div className="md:mb-[40px] mb-[30px]">
        <img
          src={item.topicon.src}
          className="font-light text-6xl w-[16px] h-[35px] md:w-[39px] md:h-[74px]"
        />
      </div>
      <div className="flex items-center gap-5 md:gap-10 mb-[30px] md:mb-[55px]">
        <img
          src={item.icon.src}
          alt="icon"
          className="w-[38px] h-[40px] md:w-[76px] md:h-[80px]"
        />

        <h3 className="text-2xl md:text-4xl  font-bold text-white ">
          {item.title}
        </h3>
      </div>
      <p className=" font-man mb-[25px] md:mb-[44px] md:text-lg">
        {item.description}
      </p>
      <p className="text-gray font-man text-base">{item.text}</p>
    </li>
  );
};

export default Item;
