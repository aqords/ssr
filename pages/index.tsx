import Head from "next/head";
<<<<<<< HEAD
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// import Homepage from "./Homepage/Homepage";
import AboutUs from "./AboutUs/AboutUs";
=======
import Homepage from "./homepage/homepage";
>>>>>>> HowItWorks

const Home = ({ image }: any) => {
  return (
    <>
      <Head>
        <title>title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
        <meta name="theme-color" content="default"></meta>
      </Head>
<<<<<<< HEAD
      <Header />
      {/* <Homepage /> */}
      <AboutUs />
      <Footer />
=======
      <Homepage />
>>>>>>> HowItWorks
    </>
  );
};

export default Home;
