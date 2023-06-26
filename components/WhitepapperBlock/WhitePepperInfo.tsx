import { useTranslation } from "next-i18next";
import Image from "next/image";
import whitepapperimg from "/public/assets/images/whitepapperimg.svg";

const whitepapper = [
  {
    mainTitle: "1. Introduction",
    text1:
      "The transportation industry plays a critical role in global commerce, facilitating the movement of goods across borders and connecting businesses to markets. However, this industry faces various challenges such as inefficient processes, lack of transparency, delayed payments, and disputes.",
    text2:
      "To overcome these obstacles and drive innovation, there is a growing need for transformative solutions that can revolutionize the freight transportation landscape. In this context, blockchain technology emerges as a promising enabler, offering enhanced security, transparency, and efficiency. This white paper explores the application of blockchain in the freight transportation industry and introduces AQORDS as a groundbreaking platform that leverages this technology to redefine the way contracts are executed, payments are processed, and trust is established between stakeholders.",
    body: [
      {
        subtitle: "1.1 The Freight Transportation Landscape",
        text1:
          "The freight transportation landscape is a complex ecosystem involving multiple parties, including shippers, carriers, freight forwarders, freight exchanges, and supply chain partners. Traditionally, this industry has relied on manual processes, paper-based documentation, and fragmented systems, leading to inefficiencies, delays, and increased costs. ",
        text2:
          "The increasing volume of global trade and the need for faster, more reliable transportation solutions have highlighted the urgency for innovation. The traditional methods of contract execution, payment processing, and dispute resolution have proven to be inadequate, hindering the growth and sustainability of the industry.",
        list: [],
      },
      {
        subtitle: "1.2 The Need for Innovation",
        text1:
          "The Need for Innovation The need for innovation in the freight transportation industry has become imperative to address the existing challenges and unlock new opportunities. Stakeholders are seeking solutions that can streamline processes, improve transparency, enhance security, and enable faster and more efficient transactions. ",
        text2:
          "These characteristics make blockchain an ideal solution for addressing the challenges faced by the freight transportation industry. Blockchain technology can enable trustless transactions, automate processes through smart contracts, enhance track-and-trace capabilities, and provide a secure and auditable record of all interactions. AQORDS harnesses the power of blockchain to transform the freight transportation landscape and unlock new possibilities for stakeholders.",
        list: [],
      },
      {
        subtitle: "1.3 The Role of Blockchain",
        text1:
          "Blockchain technology has emerged as a disruptive force in various industries, offering unique features that can revolutionize the way transactions are conducted, recorded, and verified. By leveraging decentralized networks, cryptographic algorithms, and consensus mechanisms, blockchain provides a secure, transparent, and immutable infrastructure for executing and recording transactions. These characteristics make blockchain an ideal solution for addressing the challenges faced by the freight transportation industry. ",
        text2:
          "Blockchain technology can enable trustless transactions, automate processes through smart contracts, enhance track-and-trace capabilities, and provide a secure and auditable record of all interactions. AQORDS harnesses the power of blockchain to transform the freight transportation landscape and unlock new possibilities for stakeholders.",
        list: [],
      },
    ],
  },
  {
    mainTitle: "2. AQORDS Technology",
    text1: null,
    text2: null,
    body: [
      {
        subtitle: "2.1 The AQORDS Platform",
        text1:
          "AQORDS is a groundbreaking platform built on blockchain technology, specifically designed for the freight transportation industry. It provides a decentralized ecosystem that enables instant, verifiable, and secure contract execution, payment processing, and dispute resolution.  ",
        text2:
          "The platform leverages smart contracts, decentralized finance (DeFi) integration, and advanced track-and-trace functionality to streamline processes, reduce costs, and foster trust between shippers and carriers. By connecting stakeholders in a transparent and efficient manner, AQORDS aims to revolutionize the way contracts are executed, payments are processed, and trust is established within the freight transportation ecosystem.",
        list: [],
      },
      {
        subtitle: "2.2 Objectives and Key Features",
        text1:
          "The objectives of AQORDS are aligned with the needs of the freight transportation industry, focusing on enhancing efficiency, transparency, and trust. Key features of AQORDS include: ",
        text2: null,
        list: [
          {
            title: "Smart Contract Execution:",
            text: "AQORDS enables the execution of smart contracts for freight transportation, automating processes, and eliminating the need for manual intervention.",
          },
          {
            title: "Instant Payments:",
            text: "The platform facilitates instant payments upon contract execution and delivery confirmation, reducing payment delays and improving cash flow for carriers.",
          },
          {
            title: "Decentralized Finance (DeFi) Integration:",
            text: "AQORDS integrates with decentralized finance protocols to provide carriers with access to financing options, minimizing their reliance on traditional financial institutions.",
          },
          {
            title: "Track-and-Trace Functionality:",
            text: "The advanced track-and-trace capabilities of AQORDS enable real-time monitoring of shipments, ensuring transparency and accountability throughout the transportation process.",
          },
          {
            title: "Dispute Resolution Mechanisms:",
            text: "AQORDS incorporates automated dispute resolution mechanisms, reducing the time and costs associated with resolving disputes between shippers and carriers.",
          },
          {
            title: "Data Privacy and Security: ",
            text: "The platform prioritizes data privacy and security, ensuring that sensitive information is protected and only accessible to authorized parties.",
          },
        ],
      },
      {
        subtitle: "2.3 Value Proposition",
        text1:
          "AQORDS offers a compelling value proposition for stakeholders in the freight transportation industry: ",
        text2: null,
        list: [
          {
            title: "Efficiency:",
            text: "By automating processes and eliminating manual interventions, AQORDS streamlines operations, reducing administrative burdens and optimizing resource utilization.",
          },
          {
            title: "Transparency:",
            text: "The transparent nature of blockchain technology provides stakeholders with real-time visibility into contract execution, payment status, and shipment tracking, fostering trust and accountability.",
          },
          {
            title: "Cost Reduction:",
            text: "AQORDS reduces costs associated with manual paperwork, payment delays, and dispute resolution, enabling more efficient and cost-effective operations for shippers and carriers.",
          },
          {
            title: "Trust and Security:",
            text: "The immutability and cryptographic security of blockchain ensure the integrity of transactions, minimizing fraud risks and establishing trust between parties",
          },
        ],
      },
    ],
  },
];

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
            <div className="“connect__list”">
              <h2>Table of contents: </h2>
              <ul>
                {whitepapper.map((item) => (
                  <li>{item.mainTitle}</li>
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
                          <p className="font-man text-[16px]  text-[#838383]">
                            {el.text2}
                          </p>
                        )}
                        {el.list.length > 0 ? (
                          <ul className="list-disc text-[#838383]">
                            {el.list.map((target) => (
                              <li className="ml-[25px] mb-[20px]">
                                <h4 className="text-white">{target.title}</h4>
                                <p className="font-man text-[14px]">
                                  {target.text}
                                </p>
                              </li>
                            ))}
                          </ul>
                        ) : null}
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
