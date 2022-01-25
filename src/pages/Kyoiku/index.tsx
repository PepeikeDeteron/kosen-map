import { VFC } from 'react';
import Head from 'next/head';
import Footer from '@/components/organisms/Footer';
import Template from '@/components/templates/Kyoiku';

const Kyoiku: VFC = () => {
  return (
    <>
      <Head>
        <title>一関高専Map｜管理・教育棟</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template />
      <Footer />
    </>
  );
};

export default Kyoiku;
