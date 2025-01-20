import React from 'react';
import Head from 'next/head';
import RubyConverter from './components/RubyConverter';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ruby Converter</title>
        <meta name="description" content="漢字|（ふりがな）形式をルビタグに変換するツール" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-yellowBackground min-h-screen flex items-center justify-center">
        <RubyConverter />
      </main>
    </>
  );
};

export default Home;
