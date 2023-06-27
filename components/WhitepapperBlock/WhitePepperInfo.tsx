import { useTranslation } from "next-i18next";
import Image from "next/image";
import whitepapperimg from "/public/assets/images/whitepapperimg.svg";
import whitepapper from "../Constant/WhitePapper";

const Whitepapper = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="container">
        <div className="container pt-[0px] pb-[0px] smx:pt-[60px] smx:pb-[40px] lg:pt-[120px] lg:pb-[85px]">
          <h1 className="font-bold text-[29px] lg:text-[44px] lg:tracking-[0.3px] leading-[2.2rem] lg:leading-[3.7rem] mb-[30px]">
            {t(
              "The AQORDS platform aims to transform the freight transportation industry by leveraging the power of blockchain technology."
            )}
          </h1>
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <div className=" max-w-[525px]">
              <p className="font-man text-[18px] lg:text-[20px] leading-[1.5rem] lg:leading-[2rem] lg:tracking-[-0.45px] mb-[35px]">
                {t(
                  "This white paper provides an in-depth overview of AQORDS, its underlying principles, and the innovative solutions it offers. We explore the challenges faced by the industry, the benefits of blockchain technology, and how AQORDS addresses these challenges to provide a more efficient, transparent, and secure freight transportation ecosystem."
                )}
              </p>
              <p className="font-man text-[#838383]  text-[16px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
                {t(
                  "By combining these elements, AQORDS is poised to revolutionize the industry, fostering trust, streamlining processes, and empowering shippers and carriers. Join us on this transformative journey towards a future where freight transportation is seamless, reliable, and future-proof."
                )}
              </p>
            </div>
            <div className="mt-[40px] ">
              <Image src={whitepapperimg} alt="image" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-[40px] lg:py-[120px]">
          <div className="flex flex-col items-center lg:flex-row gap-[40px] lg:gap-[40px] lg:items-start ">
            <div className="“connect__list border-r-[1px] max-h-[1000px] border-hidden lg:border-opacity-25 border-[#98A2B3] ”">
              <h2 className=" border-b-[1px] border-opacity-25 border-[#98A2B3] text-[32px] pb-[40px] font-bold">
                Table of contents:
              </h2>
              <ul className="w-[350px] smx:w-[450px]">
                {whitepapper.map((item) => (
                  <li className=" border-b-[1px] border-opacity-25 border-[#98A2B3] leading-[42px] text-[20px] tracking-[-0.4px] text-[#838383] py-[16px]">
                    {item.mainTitle}
                  </li>
                ))}
              </ul>
            </div>

            <div className="max-w-[624px]">
              {whitepapper.map((item) => (
                <div className="sheaker border-b-[1px] border-opacity-25 border-[#98A2B3]">
                  <div className="mb-[40px]">
                    <h2 className="title__border text-[32px] mb-[40px] font-bold">
                      {item.mainTitle}
                    </h2>
                    {item.text1 && (
                      <p className="font-man block mb-[30px] text-[20px]">
                        {item.text1}
                      </p>
                    )}
                    {item.text2 && (
                      <p className=" font-man text-[16px]  text-[#838383]">
                        {item.text2}
                      </p>
                    )}
                  </div>
                  <div>
                    {item.body.map((el) => (
                      <div className="mb-[70px]">
                        <h3 className="text-[24px] font-bold mb-[30px]">
                          {el.subtitle}
                        </h3>
                        {el.text1 && (
                          <p className="font-man block mb-[30px] text-[18px]">
                            {el.text1}
                          </p>
                        )}
                        {el.text2 && (
                          <p className="font-man mb-[55px] text-[16px]  text-[#838383]">
                            {el.text2}
                          </p>
                        )}
                        {el.text3 && (
                          <p className="font-man font-bold block mb-[30px] text-[18px]">
                            {el.text3}
                          </p>
                        )}
                        {el.text4 && (
                          <p className="font-man block mb-[30px] text-[18px]">
                            {el.text4}
                          </p>
                        )}
                        {el.underlist &&
                          el.underlist.map((item) => (
                            <ul>
                              <li>
                                {item.title && <h3>{item.title}</h3>}
                                {item.a_title && <h3>{item.a_title}</h3>}
                                {item.b_title && <h3>{item.b_title}</h3>}
                                {item.list && (
                                  <ul className="list-disc text-[#838383]">
                                    {item.list.map((target) => (
                                      <li className="ml-[25px] mb-[20px]">
                                        <h4 className="text-white">
                                          {target.title}
                                        </h4>
                                        <p className="font-man text-[14px]">
                                          {target.text}
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
                <h5 className="text-[24px] font-bold mb-[40px]">Note</h5>
                <p className="font-man block mb-[30px] text-[18px]">
                  This white paper provides a comprehensive understanding of
                  AQORDS, its features, benefits, and its potential to
                  revolutionize the freight transportation industry.
                </p>
                <p className="font-man mb-[55px] text-[16px]  text-[#838383]">
                  It serves as a guide for stakeholders, investors, and industry
                  participants who are interested in understanding the
                  underlying technology, principles, and future prospects of
                  AQORDS. Join us on this exciting journey as we reshape the
                  world of freight transportation through blockchain innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Whitepapper;
