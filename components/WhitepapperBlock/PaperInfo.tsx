import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import whitepapperimg from "/public/assets/images/whitepapperimg.svg";
import whitepapper from "../Constant/WhitePapper";

const Whitepapper = () => {
  const { t } = useTranslation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 1.5; // Пример: кнопка появляется при прокрутке на половину высоты окна

      setShowButton(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 900, behavior: "smooth" });
  };

  return (
    <>
      <section className="container">
        <div className="container pt-[0px] pb-[0px] smx:pt-[60px] smx:pb-[40px] lg:pt-[120px] lg:pb-[85px]">
          <h1 className="font-bold text-[29px] lg:text-[44px] lg:tracking-[0.3px] leading-[2.2rem] lg:leading-[3.7rem] mb-[30px]">
            {t("whitepaper_info_title1")}
          </h1>
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <div className=" max-w-[525px]">
              <p className="font-man text-[18px] lg:text-[20px] leading-[1.5rem] lg:leading-[2rem] lg:tracking-[-0.45px] mb-[35px]">
                {t("whitepaper_info_desc1")}
              </p>
              <p className="font-man text-[#838383]  text-[16px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
                {t("whitepaper_info_desc2")}
              </p>
            </div>
            <div className="mt-[40px] ">
              <Image src={whitepapperimg} alt="image" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" container py-[40px] lg:py-[120px]">
          <div className="flex flex-col items-center lg:flex-row gap-[40px] lg:gap-[20px] lg:items-start ">
            <div className="static lg:sticky lg:top-[10%]  connect__list h-[800px] lg:h-[1000px] border-0 lg:border-r-[1px] lg:border-[#98A2B3] lg:border-opacity-25 ">
              <h2 className="border-b-[1px] border-opacity-25 border-[#98A2B3]  text-[32px] pb-[40px] font-bold">
                {t("whitepaper_info_title2")}
              </h2>
              <ul className="w-[350px] smx:w-[450px]">
                {whitepapper.map((item) => (
                  <li className="border-b-[1px] border-opacity-25 border-[#98A2B3] leading-[42px] text-[20px] tracking-[-0.4px] text-[#838383] hover:text-white active:text-white py-[16px]">
                    <a href={`#${item.id}`}> {t(`${item.mainTitle}`)}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative ml-1/4 max-w-[624px]">
              {whitepapper.map((item) => (
                <div className="sheaker border-b-[1px] border-opacity-25 border-[#98A2B3]">
                  <div className="mb-[40px]">
                    <h2
                      id={item.id}
                      key={item.id}
                      className="anchor-heading title__border text-[32px] mb-[40px] font-bold"
                    >
                      {t(item.mainTitle)}
                    </h2>
                    {item.text1 && (
                      <p className="font-man block mb-[30px] text-[20px]">
                        {t(item.text1)}
                      </p>
                    )}
                    {item.text2 && (
                      <p className=" font-man text-[16px]  text-[#838383]">
                        {t(item.text2)}
                      </p>
                    )}
                  </div>
                  <div>
                    {item.body.map((el) => (
                      <div className="mb-[70px]">
                        <h3 className="text-[24px] font-bold mb-[30px]">
                          {t(el.subtitle)}
                        </h3>
                        {el.text1 && (
                          <p className="font-man block mb-[30px] text-[18px]">
                            {t(el.text1)}
                          </p>
                        )}
                        {el.text2 && (
                          <p className="font-man mb-[55px] text-[16px]  text-[#838383]">
                            {t(el.text2)}
                          </p>
                        )}
                        {el.text3 && (
                          <p className="font-man font-bold block mb-[30px] text-[18px]">
                            {t(el.text3)}
                          </p>
                        )}
                        {el.text4 && (
                          <p className="font-man block mb-[30px] text-[18px]">
                            {t(el.text4)}
                          </p>
                        )}
                        {el.underlist &&
                          el.underlist.map((item) => (
                            <ul>
                              <li>
                                {item.title && <h3>{t(item.title)}</h3>}
                                {item.a_title && <h3>{t(item.a_title)}</h3>}
                                {item.b_title && <h3>{t(item.b_title)}</h3>}
                                {item.list && (
                                  <ul className="list-disc text-[#838383]">
                                    {item.list.map((target) => (
                                      <li className="ml-[25px] mb-[20px]">
                                        <h4 className="text-white">
                                          {t(`${target.title}`)}
                                        </h4>
                                        <p className="font-man text-[14px]">
                                          {t(target.text)}
                                        </p>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            </ul>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="p-[24px] orangeb">
                <h5 className="text-[24px] font-bold mb-[40px]">
                  {t("whitepaper_info_title3")}
                </h5>
                <p className="font-man block mb-[30px] text-[18px]">
                  {t("whitepaper_info_desc3")}
                </p>
                <p className="font-man mb-[55px] text-[16px]  text-[#838383]">
                  {t("whitepaper_info_desc4")}
                </p>
              </div>
            </div>
          </div>
          {showButton && (
            <button
              onClick={handleScrollToTop}
              className={`fixed lg:hidden  bottom-10  right-1/3 transform -translate-x-1/7 -translate-y-1/2      text-[16px] font-semibold font-man bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] text-[#0A090F]   px-[35px] py-[8px] rounded-[10px]  border-none outline-none cursor-pointer ${
                showButton ? "animate-fade-in" : "animate-fade-out"
              }`}
            >
              {t("Move on top ↑")}
            </button>
          )}
        </div>
      </section>
    </>
  );
};
export default Whitepapper;
