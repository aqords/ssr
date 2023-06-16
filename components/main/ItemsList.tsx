import React from "react";
import Item from "./Item";
import one from "public/assets/images/one.svg";
import mexa from "public/assets/images/mexa.png";
import wallet from "public/assets/images/wallet.svg";
import arrow from "public/assets/images/arrow.svg";
import guardian from "public/assets/images/guardian.svg";
import tepi from "public/assets/images/tepi.svg";
import two from "public/assets/images/two.svg";
import three from "public/assets/images/three.svg";
import four from "public/assets/images/four.svg";
import fife from "public/assets/images/fife.svg";
const items = [
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
const ItemsList = () => {
  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
