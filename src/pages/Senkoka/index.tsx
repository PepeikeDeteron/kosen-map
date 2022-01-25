import { VFC } from 'react';
import Head from 'next/head';
import Footer from '@/components/organisms/Footer';
import Template from '@/components/templates/Senkoka';

const Senkoka: VFC = () => {
  return (
    <>
      <Head>
        <title>一関高専Map｜専攻科・教育棟</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template />
      <Footer />
    </>
  );
};

export default Senkoka;
