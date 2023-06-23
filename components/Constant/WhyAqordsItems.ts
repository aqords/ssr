import one from "public/assets/images/one.svg";
import mexa from "public/assets/images/mexa.svg";
import wallet from "public/assets/images/wallet.svg";
import arrow from "public/assets/images/arrow.svg";
import guardian from "public/assets/images/guardian.svg";
import tepi from "public/assets/images/tepi.svg";
import two from "public/assets/images/two.svg";
import three from "public/assets/images/three.svg";
import four from "public/assets/images/four.svg";
import fife from "public/assets/images/fife.svg";
import six from "public/assets/images/six.svg";
import seven from "public/assets/images/seven.svg";
import lock from "public/assets/images/lock.svg";

export interface renderObject {
  topicon: string;
  icon: string;
  title: string;
  description: string;
  text: string;
}
export const whyAqordsList: renderObject[] = [
  {
    topicon: one,
    icon: mexa,
    title: "Streamlined Processes",
    description:
      "Bid farewell to arduous paperwork and laborious manual processes. AQORDS simplifies the execution of freight transportation contracts by seamlessly digitizing and automating the entire workflow.",
    text: "From contract signing to delivery confirmation, our platform orchestrates flawless operations,freeing up valuable time and resources.",
  },
  {
    topicon: two,
    icon: guardian,
    title: "Trust and Security",
    description:
      "Leveraging our decentralized finance (DeFi) solutions, AQORDS offers carriers cost-effective financing options, mitigating their reliance on conventional banking systems.",
    text: "Through optimized financial arrangements, we empower carriers to achieve peak operational efficiency and foster sustainable growth.",
  },
  {
    topicon: three,
    icon: arrow,
    title: "Financial Efficiency",
    description:
      "Leveraging our decentralized finance (DeFi) solutions, AQORDS offers carriers cost-effective financing options, mitigating their reliance on conventional banking systems.",
    text: "Through optimized financial arrangements, we empower carriers to achieve peak operational efficiency and foster sustainable growth.",
  },
  {
    topicon: four,
    icon: tepi,
    title: "Enhanced Connectivity",
    description:
      "AQORDS nurtures a vibrant community, seamlessly connecting shippers and carriers. Our platform propels your networking capabilities to new heights, unlocking access to a diverse array of esteemed partners.",

    text: "Embrace unparalleled collaboration opportunities and expand your business horizons.",
  },
  {
    topicon: fife,
    icon: wallet,
    title: "Expedited Payments",
    description:
      "We understand the criticality of cash flow for carriers. AQORDS ensures expedited payments upon delivery, eradicating the anguish of delayed remittances.",

    text: "Our platform guarantees prompt payment once the contract is duly executed and confirmed by all stakeholders, empowering carriers to stay focused on their core competencies.",
  },
];

export const ManifestList: renderObject[] = [
  {
    topicon: one,
    icon: guardian,
    title: "Trust and Transparency",
    description:
      "We believe that trust is the foundation of any successful business relationship. Through blockchain technology, we aim to create an environment where trust is inherent in every transaction.",
    text: " Our platform ensures transparent and immutable records, eliminating the need for intermediaries and reducing the risk of fraud and disputes.",
  },
  {
    topicon: two,
    icon: mexa,
    title: "Efficiency and Automation",
    description:
      "The freight transportation process should be streamlined and efficient. We are dedicated to simplifying complex procedures and automating manual tasks.",
    text: "By digitizing contracts, invoices, and proof of delivery, we empower carriers and shippers to operate with greater speed, accuracy, and cost-effectiveness.",
  },
  {
    topicon: three,
    icon: wallet,
    title: "Instant Payments",
    description:
      "Delayed payments have long been a burden for carriers, impacting their cash flow and hindering their ability to grow and invest. We are committed to enabling instant payments through our platform.",
    text: "By leveraging blockchain and decentralized finance (DeFi) solutions, we revolutionize the payment process, ensuring that carriers are paid upon delivery, empowering them to thrive in the industry.",
  },
  {
    topicon: four,
    icon: tepi,
    title: "Collaboration and Partnership",
    description:
      "We believe that collaboration is essential for driving innovation and creating lasting impact. We actively seek partnerships with major shippers, freight forwarders, and technology providers to foster a strong ecosystem.",
    text: "Together, we can shape the future of freight transportation, overcoming challenges and unlocking new opportunities.",
  },
  {
    topicon: fife,
    icon: lock,
    title: "Security and Privacy",
    description:
      "We prioritize the security and privacy of our users' data. With advanced cryptographic protocols and robust security measures, we ensure the integrity and confidentiality of sensitive information.",
    text: "Our platform empowers users to have full control over their data while enjoying the benefits of blockchain technology.",
  },
  {
    topicon: six,
    icon: tepi,
    title: "Sustainable Growth",
    description:
      "We are committed to building a sustainable future for the freight transportation industry.",
    text: "By eliminating unnecessary paperwork, reducing administrative overhead, and optimizing processes, we contribute to a greener and more environmentally friendly ecosystem.",
  },
  {
    topicon: seven,
    icon: lock,
    title: "Empowering Communities",
    description:
      "We aim to empower carriers, shippers, and other stakeholders within the freight transportation community.",
    text: "Our platform provides equal opportunities and access to a wider range of business partners, opening doors for growth, innovation, and success.",
  },
];
