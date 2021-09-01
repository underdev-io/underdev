import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Parallax } from "@react-spring/parallax";
import { Contact } from "../components/Contact";

const HomePage: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Underdev</title>
        <meta name="description" content="Underdev." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Parallax style={{ height: "calc(100vh - 100px)" }} pages={3}>
        <Home />
        <About />
        <Contact />
      </Parallax>
    </>
  );
};

export default HomePage;
