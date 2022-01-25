import { VFC } from 'react';
import Head from 'next/head';
import Footer from '@/components/organisms/Footer';
import Template from '@/components/templates/Home';

const Home: VFC = () => {
  return (
    <>
      <Head>
        <title>一関高専Map｜校舎案内</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template />
      <Footer />
    </>
  );
};

export default Home;
