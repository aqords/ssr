import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Image from "next/image";

import arrow from "../../public/assets/images/arrow-accordion.svg";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = (boolean: boolean) => {
    setIsOpen(!boolean);
  };

  return (
    <div>
      <button
        className={`text-[32px] text-[${
          isOpen ? "#fff" : "#838383"
        }]  hover:text-[#fff] w-full flex justify-between items-center`}
        onClick={() => toggleAccordion(isOpen)}
      >
        Signing and Execution
        <Button
          insideGradient={
            "rounded-[10px] bg-gradient-to-r from-[#27241d]  to-[#252118] px-[15px] py-[19px]"
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
        className={`flex justify-between items-end ${
          isOpen
            ? "visible opacity-100 max-h-full"
            : "invisible opacity-0 max-h-0"
        } transition-all duration-500`}
      >
        <div className="max-w-[624px] leading-8">
          <p className="font-man text-[19px] mt-[40px] mb-[35px] tracking-[-0.14px]">
            To get started, shippers and carriers can easily integrate their
            existing systems or applications with the AQORDS platform. Our
            seamless integration process ensures a smooth transition and minimal
            disruption to your current operations.
          </p>
          <p className="font-man text-[15px] text-[#838383] tracking-[-0.14px] ">
            We also collaborate with major freight exchange platforms to enhance
            connectivity and expand your network of potential business partners.
          </p>
        </div>
        <div className="w-[348px] h-[226px] overflow-hidden bg-gray rounded-[20px]">
          {/* <Image /> */}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
