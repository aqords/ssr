import React from "react";
import ItemsList from "./ItemsList";

const MainContent = () => {
  return (
    <main>
      <section className="bg-second container">
        <div className="md:mb-[120px] mb-[60px] pt-[120px]">
          <h2 className="font-bold text-2xl md:text-4xl mb-[30px]">
            Why AQORDS?
          </h2>
          <p className="font-normal text-base md:text-lg ">
            AQORDS revolutionizes the freight transportation industry with
            blockchain-powered solutions and unprecedented opportunities.
          </p>
        </div>
        <ItemsList />
      </section>

      <section className=" bg-cover bg-center bg-no-repeat bg-[url('../public/assets/images/truck.png')]">
        <div className="container">
          <div className="py-[20%] w-full max-w-[532px]">
            <h3 className="md:leading-[59px] font-bold text-2xl md:text-4xl mb-[30px]">
              Are you prepared to embark on this transformative journey?
            </h3>
            <p>
              Delve into our website to unravel the intricate workings of our
              platform, acquaint yourself with our exceptional team, and witness
              firsthand how AQORDS propels your freight transportation
              operations into a new era.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
