import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Client } from "../components/Client";
import { SocialDev } from "../components/SocialDev";
import { Testimonials } from "../components/Testimonials";
const HomePage: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Underdev</title>
        <meta name="description" content="Underdev." />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#222222" />
      </Head>
      <Header />
      <Home />
      <About />
      <Client />
      <Testimonials />
      <SocialDev />
      <Contact />
    </>
  );
};

export default HomePage;
