import React from "react";

const AboutUsblock = () => {
  return (
    <section className="bg-no-repeat bg-cover bg-center bg-[url(../public/assets/images/about-bg.svg)]">
      <div className="container">
        <div className="py-[350px] max-w-[532px]">
          <h1 className=" font-bold text-2xl md:text-[48px]  mb-[30px] tracking-[-1.5px]">
            About us!
          </h1>
          <p className="font-normal  md:text-lg font-man max-w-[790px] leading-6 md:leading-8 tracking-[-0.42px] mb-[30px]">
            We are a team of visionaries, technologists, and industry experts
            dedicated to revolutionizing the freight transportation landscape
            through blockchain innovation.
          </p>
          <p className="text-[#838383] font-man font-normal text-base">
            Our mission is to transform the way contracts are executed and
            payments are processed, bringing transparency, efficiency, and trust
            to supply chains worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsblock;
