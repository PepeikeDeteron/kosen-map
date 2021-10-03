import React from 'react'
import Head from 'next/head'
import Top from '@/components/templates/Home'

const Home: React.VFC = () => {
  return (
    <>
      <Head>
        <title>一関高専Map｜校内案内図</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Top />
    </>
  )
}

export default Home
