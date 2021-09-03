import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Client } from "../components/Client";
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
      <Contact />
      <Client />
    </>
  );
};

export default HomePage;
