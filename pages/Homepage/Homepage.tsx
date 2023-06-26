import React from "react";
import Upperblock from "../../components/Upperblock/Upperblock";
import Navigationblock from "../../components/Navigationblock/Navigationblock";
import WhyAqords from "../../components/WhyAqords/WhyAqords";
import { whyAqordsList } from "../../components/Constant/WhyAqordsItems";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <>
      <Upperblock />
      <WhyAqords itemsArray={whyAqordsList} />
      <Navigationblock />
      <Footer />
    </>
  );
};

export default Homepage;
