import React from 'react'
import Head from 'next/head'
import Template from '@/components/templates/Home'

const Home: React.VFC = () => {
  return (
    <>
      <Head>
        <title>一関高専Map｜校内案内図</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Template />
    </>
  )
}

export default Home
