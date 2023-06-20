import React from "react";
import ItemsList from "./ItemsList";

const MainContent = () => {
  return (
    <>
      <main>
        <section className="bg-second">
          <div className="container">
            <div className="pt-[100px] sm:pt-[150px] md:pt-[205px]">
              <h2 className="  font-bold text-2xl md:text-4xl mb-[30px]">
                Why AQORDS?
              </h2>
              <p className="font-normal  text-base md:text-lg font-man max-w-[790px] leading-6 md:leading-8">
                AQORDS revolutionizes the freight transportation industry with
                blockchain-powered solutions and unprecedented opportunities.
              </p>
            </div>
            <ItemsList />
          </div>
        </section>

        <section className=" bg-cover bg-left bg-no-repeat bg-[url('../public/assets/images/truck.png')] sm:bg-center">
          <div className="container">
            <div className="  py-[20%] w-full max-w-[330px] md:max-w-[450px]">
              <h3 className=" max-w-[280px] md:max-w-[430px] text-2xl leading-10 md:leading-[59px] font-bold  md:text-4xl mb-[30px]">
                Are you prepared to embark on this transformative journey?
              </h3>
              <p className=" font-man font-normal md:text-[20px] text-base leading-6  md:leading-8 ">
                Delve into our website to unravel the intricate workings of our
                platform, acquaint yourself with our exceptional team, and
                witness firsthand how AQORDS propels your freight transportation
                operations into a new era.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainContent;
