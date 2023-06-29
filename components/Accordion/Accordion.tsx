import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Image from "next/image";

import arrow from "../../public/assets/images/arrow-accordion.svg";

interface AccordionProps {
  title: string;
  desc1: string;
  desc2: string;
}

const Accordion = ({ title, desc1, desc2 }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = (boolean: boolean) => {
    setIsOpen(!boolean);
  };

  return (
    <div className="">
      <button
        className={`tracking-[-0.6px] text-[24px] lg:text-[32px] text-[${
          isOpen ? "#fff" : "#838383"
        }]  hover:text-[#fff] w-full flex justify-between items-center `}
        onClick={() => toggleAccordion(isOpen)}
      >
        {title}
        <Button
          insideGradient={
            "rounded-[10px] bg-gradient-to-r from-[#27241d]  to-[#252118] px-[13px] py-[17px]"
          }
          outsideGradient={`rounded-[10px] ${
            isOpen ? "bg-gradient-to-l" : "bg-gradient-to-r"
          }   from-[#b5713f]  to-[#c6b38a] p-[1px]`}
        >
          <Image
            className={`duration-500 rotate-${isOpen ? "180" : "0"}`}
            src={arrow}
            alt="arrow-button"
          />
        </Button>
      </button>
      <div
        className={`flex overflow-hidden justify-between   duration-500 ${
          isOpen
            ? "max-h-[100vh] opacity-100 visible pt-[39px]"
            : "max-h-0 opacity-0 unvisible"
        }`}
      >
        <div className="max-w-[624px] leading-8">
          <p className="font-man font-[300] text-[19px] mb-[30px] tracking-[0.2px]">
            {desc1}
          </p>
          <p className="font-man text-[15px] text-[#838383] tracking-[0.14px] ">
            {desc2}
          </p>
        </div>
        <div className="hidden lg:block w-[348px] h-[226px] bg-gray rounded-[20px]">
          {/* <Image /> */}
        </div>
      </div>
      <span className="block h-[1px] w-full bg-[#98A2B3] opacity-25 my-[39.5px]"></span>
    </div>
  );
};

export default Accordion;
