import React from 'react';
import Head from 'next/head';
import Template from '@/components/templates/Kyoiku';

const Kyoiku: React.VFC = () => {
  return (
    <>
      <Head>
        <title>一関高専Map｜管理・教育棟</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Template />
    </>
  );
};

export default Kyoiku;
