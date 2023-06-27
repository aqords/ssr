import { useTranslation } from "next-i18next";
import Image from "next/image";
import whitepapperimg from "/public/assets/images/whitepapperimg.svg";
import whitepapper from "../Constant/WhitePapper";

const Whitepapper = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="container">
        <div className="container py-[120px]">
          <h1 className="font-bold text-[29px] lg:text-[44px] lg:tracking-[0.3px] leading-[2.2rem] lg:leading-[3.7rem] mb-[30px]">
            {t(
              "The AQORDS platform aims to transform the freight transportation industry by leveraging the power of blockchain technology."
            )}
          </h1>
          <div className="flex justify-between">
            <div className=" max-w-[532px]">
              <p className="font-man text-[15px] lg:text-[20px] leading-[1.5rem] lg:leading-[2rem] lg:tracking-[-0.45px] mb-[35px]">
                {t(
                  "This white paper provides an in-depth overview of AQORDS, its underlying principles, and the innovative solutions it offers. We explore the challenges faced by the industry, the benefits of blockchain technology, and how AQORDS addresses these challenges to provide a more efficient, transparent, and secure freight transportation ecosystem."
                )}
              </p>
              <p className="font-man text-[#838383]  text-[14px] leading-[1.3rem] lg:leading-[2rem] lg:text-[16px] tracking-[-0.3px] mb-[0px]">
                {t(
                  "By combining these elements, AQORDS is poised to revolutionize the industry, fostering trust, streamlining processes, and empowering shippers and carriers. Join us on this transformative journey towards a future where freight transportation is seamless, reliable, and future-proof."
                )}
              </p>
            </div>
            <div>
              <Image src={whitepapperimg} alt="image" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="connect flex gap-[21px]">
            <div className="“connect__list border-r-[1px] max-h-[1000px] border-opacity-25 border-[#98A2B3] ”">
              <h2 className="text-[32px]  font-bold">Table of contents: </h2>
              <ul className="w-[450px]">
                {whitepapper.map((item) => (
                  <li className=" border-t-[1px] border-opacity-25 border-[#98A2B3] leading-[42px] text-[20px] tracking-[-0.4px] text-[#838383] py-[16px]">
                    {item.mainTitle}
                  </li>
                ))}
              </ul>
            </div>

            <div className="max-w-[624px]">
              {whitepapper.map((item) => (
                <>
                  <div className="mb-[40px]">
                    <h2 className="text-[32px] mb-[40px] font-bold">
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
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Whitepapper;
