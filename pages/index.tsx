import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Home } from '../components/Home'

const HomePage: NextPage = (props: any) => {
  return (
    <div>
      <Head>
        <title>Underdev</title>
        <meta name="description" content="Underdev." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Home />
    </div>
  );;
};

export default HomePage;
