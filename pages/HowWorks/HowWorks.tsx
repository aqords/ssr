import Image from "next/image";
import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import Navigationblock from "../../components/Navigationblock/Navigationblock";
import { useTranslation } from "next-i18next";

interface db {
  title: string;
  desc1: string;
  desc2: string;
}
const db = [
  {
    title: "Integration and Onboarding",
    desc1:
      "To get started, shippers and carriers can easily integrate their existing systems or applications with the AQORDS platform. Our seamless integration process ensures a smooth transition and minimal disruption to your current operations. ",
    desc2:
      "We also collaborate with major freight exchange platforms to enhance connectivity and expand your network of potential business partners.",
  },
  {
    title: "Generating Smart Contracts",
    desc1:
      "Once integrated, users can leverage our platform to generate smart contracts for their freight transportation transactions. These smart contracts are digitized versions of traditional contracts, programmed to execute specific conditions and actions automatically. ",
    desc2:
      "By eliminating the need for manual paperwork, smart contracts streamline the contract creation process, saving time and reducing errors.",
  },
  {
    title: "Signing and Execution",
    desc1:
      "With the smart contract generated, shippers and carriers can securely sign the contract using their digital signatures. This ensures the authenticity and integrity of the contract, preventing tampering or unauthorized modifications. ",
    desc2:
      "Once signed, the smart contract is executed, triggering the necessary actions and events as specified in the contract terms.",
  },
  {
    title: "Track and Trace",
    desc1:
      "Throughout the transportation process, our track-and-trace module provides real-time visibility and monitoring. Shippers and carriers can track the progress of their shipments, ensuring transparency and accountability at every stage. ",
    desc2:
      "The track-and-trace functionality also enables quick identification of any potential issues or delays, allowing for proactive resolution and improved customer service.",
  },
  {
    title: "Delivery Confirmation",
    desc1:
      "Upon successful delivery of the freight, both the shipper and carrier can confirm the execution of the contract. This confirmation is recorded on the blockchain, creating an immutable and auditable record of the transaction. ",
    desc2:
      "By providing a clear proof of delivery, our platform enhances trust and minimizes disputes, streamlining the settlement process.",
  },
  {
    title: "Instant Payments",
    desc1:
      "One of the key benefits of the AQORDS platform is the ability to enable instant payments. With the execution of the contract and confirmation of delivery, carriers can receive immediate payment for their services. ",
    desc2:
      "This eliminates the need for lengthy payment terms and improves cash flow for carriers, enabling them to invest in their operations and drive growth.",
  },
  {
    title: "Dispute Resolution",
    desc1:
      "In the rare event of a dispute, our platform offers automated dispute resolution mechanisms. By leveraging smart contract automation and predefined conditions, disputes can be quickly and fairly resolved without the need for lengthy legal processes. ",
    desc2:
      "This ensures efficient resolution and minimizes disruptions to the transportation process.",
  },
  {
    title: "Data Privacy and Security",
    desc1:
      "We prioritize the security and privacy of your data. Our platform utilizes advanced cryptographic protocols and robust security measures to protect sensitive information. Users have full control over their data, and our decentralized approach ensures that data is stored securely and cannot be tampered with..",
    desc2:
      "By leveraging the power of blockchain technology, AQORDS streamlines the freight transportation process, enhances transparency, and empowers both shippers and carriers. Experience the future of freight transportation with AQORDS and unlock new possibilities for your business.Contact us today to learn more and start your journey towards a more efficient and transparent freight transportation experience",
  },
];

const HowWorks = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="container relative">
        <div
          className="
      absolute lg:top-[-1091px] lg:left-[-572px] w-[975px] h-[975px] opacity-20 background-light z-[-10] top-[-951px] left-[-612px]"
        ></div>
        <article className="mb-[80px] mt-[120px]">
          <h2 className="font-bold text-[48px] mb-[30px]">
            {t("How it works")}
          </h2>
          <p className="font-man text-[20px] tracking-[-0.14px] leading-8 mb-[80px]">
            {t(
              "At AQORDS, we are developing a user-friendly and efficient platform that simplifies the freight transportation process through the power of blockchain technology. Our goal is to provide a seamless and transparent experience for all parties involved, from shippers and carriers to freight exchange platforms."
            )}
          </p>
          <div className="h-[375px] w-full rounded-[20px] bg-gray ">
            {/* <Image /> */}
          </div>
        </article>
        {db.map((obj) => {
          return (
            <>
              <Accordion
                title={obj.title}
                desc1={obj.desc1}
                desc2={obj.desc2}
              />
            </>
          );
        })}
      </section>
      <section className="bg-gray h-[807px]">
        <div className="container h-full flex items-center">
          <div className="max-w-[580px] flex gap-[30px] flex-col ">
            <h3 className="font-bold text-[42px] tracking-[-0.5px] leading-[3rem]">
              {t(
                "  To get started, shippers and carriers can easily integrate their existing systems or applications with the AQORDS platform."
              )}
            </h3>
            <p className="font-man text-[19px] tracking-[-0.14px]">
              {t(
                "Our seamless integration process ensures a smooth transition and minimal disruption to your current operations."
              )}
            </p>
            <p className="font-man text-[#838383] text-[15px] tracking-[-0.14px]">
              {t(
                " We also collaborate with major freight exchange platforms to enhance connectivity and expand your network of potential business partners."
              )}
            </p>
          </div>
        </div>
      </section>

      <Navigationblock />
    </>
  );
};

export default HowWorks;
