import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import GamePlay from '../components/GamePlay';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Welcome from '../components/Welcome';

export default function Home({ welcomeData, users }) {
  return (
    <>
      <Head>
        <title>MetaDino | ApolloChain.io</title>
        <meta name='keywords' content='metadino' />
      </Head>
      <Layout>
        <Welcome name={welcomeData.name} age={welcomeData.age} />
        <Header />
        <GamePlay users={users} />
      </Layout>
    </>
  );
}


export async function getStaticProps(context) {
  console.log(context);
  const welcomeData = getWelcome()
  const users = await getUsers()
  return {
    props: {
      welcomeData,
      users
    },
  }
}

function getWelcome() {
  return {
    name: 'Long',
    age: 33
  }
}

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  if (!users) {
    return {
      notFound: true,
    };
  }
  return users
}