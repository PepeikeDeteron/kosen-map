import React from 'react';
import Head from 'next/head';
import Template from '@/components/templates/Senkoka';

const Senkoka: React.VFC = () => {
  return (
    <>
      <Head>
        <title>一関高専Map｜専攻科・教育棟</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Template />
    </>
  );
};

export default Senkoka;
