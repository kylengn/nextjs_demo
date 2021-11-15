import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import GamePlay from '../components/GamePlay';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>MetaDino | ApolloChain.io</title>
        <meta name='keywords' content='metadino' />
      </Head>
      <Layout>
        <Header />
        <GamePlay />
      </Layout>
    </>
  );
}
