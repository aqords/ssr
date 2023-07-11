import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import whitepapper from "../Constants/WhitePapper";
import NodeCard from "../UI/InfoCard.tsx/NodeCard";
import wpbull from "/public/assets/images/wpbull1.svg";

const PaperInfo = () => {
  const { t } = useTranslation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 1.5; // Пример: кнопка появляется при прокрутке на половину высоты окна

      setShowButton(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 900, behavior: "smooth" });
  };

  return (
    <div className="pt-[76px] md:pt-[96px]">
      <section className="container">
        <div className="pt-[0px] pb-[0px]  smx:pb-[40px] lg:pt-[120px] lg:pb-[85px]">
          <h2 className="font-bold text-[29px] lg:text-[44px] lg:tracking-[0.3px] leading-[2.2rem] lg:leading-[3.7rem] mb-[30px]">
            {t("whitepaper_info_title1")}
          </h2>
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <div className=" max-w-[525px]">
              <p className="font-man text-[18px] lg:text-[20px] leading-[1.5rem] lg:leading-[2rem] lg:tracking-[-0.45px] mb-[35px]">
                {t("whitepaper_info_desc1")}
              </p>
              <p className="font-man text-[#838383]  text-[16px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
                {t("whitepaper_info_desc2")}
              </p>
            </div>
            <div className="mt-[40px] rounded-[20px] overflow-hidden">
              <Image
                sizes="50vw"
                width={440}
                height={350}
                src={wpbull}
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" container py-[40px] lg:py-[120px]">
          <div className="flex flex-col items-center lg:flex-row gap-[40px] lg:gap-[20px] lg:items-start ">
            <div className="z-[100] static lg:sticky lg:top-[10%]  connect__list h-[800px] lg:h-[1000px] border-0 lg:border-r-[1px] lg:border-[#98A2B3] lg:border-opacity-25 ">
              <h2 className="border-b-[1px] border-opacity-25 border-[#98A2B3]  text-[32px] pb-[40px] font-bold">
                {t("whitepaper_info_title2")}
              </h2>
              <ul className="w-[350px] smx:w-[450px]">
                {whitepapper.map((item) => (
                  <li
                    key={item.id}
                    className="border-b-[1px] border-opacity-25 border-[#98A2B3] leading-[42px] text-[20px] tracking-[-0.4px] text-[#838383] hover:text-white active:text-white py-[16px]"
                  >
                    <a href={`#${item.id}`}> {t(`${item.mainTitle}`)}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative ml-1/4 max-w-[624px]">
              {whitepapper.map((item) => (
                <div
                  key={item.id}
                  className="sheaker border-b-[1px] border-opacity-25 border-[#98A2B3]"
                >
                  <div className="mb-[40px]">
                    <h2
                      id={item.id}
                      className="anchor-heading title__border text-[32px] mb-[40px] font-bold"
                    >
                      {t(`${item.mainTitle}`)}
                    </h2>
                    {item.text1 && (
                      <p className="font-man block mb-[30px] text-[20px]">
                        {t(`${item.text1}`)}
                      </p>
                    )}
                    {item.text2 && (
                      <p className=" font-man text-[16px]  text-[#838383]">
                        {t(`${item.text2}`)}
                      </p>
                    )}
                  </div>
                  <div>
                    {item.body.map((el, id) => (
                      <div key={id} className="mb-[70px]">
                        {el.id ? (
                          <h3
                            id={el.id}
                            className="anchor-heading text-[24px] font-bold mb-[30px]"
                          >
                            {t(`${el.subtitle}`)}
                          </h3>
                        ) : (
                          <h3 className="text-[24px] font-bold mb-[30px]">
                            {t(`${el.subtitle}`)}
                          </h3>
                        )}
                        {el.text1 && (
                          <p className="font-man block mb-[30px] text-[18px]">
                            {t(`${el.text1}`)}
                          </p>
                        )}
                        {el.text2 && (
                          <p className="font-man mb-[55px] text-[16px]  text-[#838383]">
                            {t(`${el.text2}`)}
                          </p>
                        )}
                        {el.text3 && (
                          <p className="font-man font-bold block mb-[30px] text-[18px]">
                            {t(`${el.text3}`)}
                          </p>
                        )}
                        {el.text4 && (
                          <p className="font-man block mb-[30px] text-[18px]">
                            {t(`${el.text4}`)}
                          </p>
                        )}
                        {el.underlist &&
                          el.underlist.map((item, id) => (
                            <ul key={id}>
                              <li>
                                {item.title && <h3>{t(`${item.title}`)}</h3>}
                                {item.a_title && (
                                  <h3>{t(`${item.a_title}`)}</h3>
                                )}
                                {item.b_title && (
                                  <h3>{t(`${item.b_title}`)}</h3>
                                )}
                                {item.list && (
                                  <ul className="list-disc text-[#838383]">
                                    {item.list.map((target, id) => (
                                      <li
                                        key={id}
                                        className="ml-[25px] mb-[20px]"
                                      >
                                        <h4 className="text-white">
                                          {t(`${target.title}`)}
                                        </h4>
                                        <p className="font-man text-[14px]">
                                          {t(`${target.text}`)}
                                        </p>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            </ul>
                          ))}
                        {el.text5 && (
                          <p className="font-man block mb-[30px] text-[18px]">
                            {t(el.text5)}
                          </p>
                        )}
                        {el.text6 && (
                          <p className="font-man  text-[14px]  text-[#838383]">
                            {t(el.text6)}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <NodeCard
                title={t("wpnodecard_text1")}
                desc1={t("wpnodecard_text2")}
                desc2={t("wpnodecard_text3")}
              />
            </div>
          </div>
          {showButton && (
            <button
              onClick={handleScrollToTop}
              className={`fixed lg:hidden   bottom-10  right-[29%] sm:right-[37%] md:right-[39%] transform -translate-x-1/6 -translate-y-1/2   text-[16px] font-semibold font-man bg-gradient-to-r from-[#b5713f]  to-[#c6b38a] text-[#0A090F]   px-[35px] py-[8px] rounded-[10px]  border-none outline-none cursor-pointer ${
                showButton ? "animate-fade-in" : "animate-fade-out"
              }`}
            >
              {t("wpnodecard_text4")}
            </button>
          )}
        </div>
      </section>
    </div>
  );
};
export default PaperInfo;
