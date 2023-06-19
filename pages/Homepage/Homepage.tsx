import React from "react";

import Header from "../../components/Header/Header";
import Navigationblock from "../../components/Navigationblock/Navigationblock";
import Upperblock from "../../components/Upperblock/Upperblock";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Upperblock />
      <Navigationblock />
    </div>
  );
};

export default Homepage;
