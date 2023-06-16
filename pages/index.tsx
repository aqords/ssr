import Head from "next/head";
import Homepage from "./Homepage/Homepage";

export default function Home({ image }: any) {
  return (
    <>
      <Head>
        <title>title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="home_description" />
      </Head>
      <Homepage />
    </>
  );
}
