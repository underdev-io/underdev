import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Client } from "../components/Client";
import { SocialDev } from "../components/SocialDev";
const HomePage: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Underdev</title>
        <meta name="description" content="Underdev." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Home />
      <About />
      <Client />
      <SocialDev />
      <Contact />
    </>
  );
};

export default HomePage;
