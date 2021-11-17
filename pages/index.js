import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import GamePlay from '../components/GamePlay';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Script from 'next/script';

export default function Home({ users }) {
  return (
    <>
      <Head>
        <title>MetaDino | ApolloChain.io</title>
        <meta name='keywords' content='metadino' />
      </Head>
      <Layout>
        <Header />
        <GamePlay users={users} />
        <Script>
          {`const btn = document.querySelector('.menu');
            const sidebar = document.querySelector('.sidebar');

            btn.addEventListener('click', () => {
              sidebar.classList.toggle('-translate-x-full');
            });
          `}
        </Script>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // console.log(context);
  const users = await getUsers();
  return {
    props: {
      users,
    },
  };
}

async function getUsers() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // const users = await res.json();

  const users = [
    {
      id: 1,
      title: 'Training',
      url: 'https://i.pinimg.com/736x/ed/7a/75/ed7a758c620a1e8f1d620ae2c061defc.jpg',
    },
    {
      id: 2,
      title: 'PvC',
      url: 'https://tokegameart.net/wp-content/uploads/2017/10/Evil-Bald-Guy-2D-Character-Sprite-for-Indie-Game-Developer.jpg',
    },
    {
      id: 3,
      title: 'PvP',
      url: 'https://tokegameart.net/wp-content/uploads/2018/03/Chibi-Prisoner-Guy-2D-Character-Sprite-for-Indie-Game-Developer.jpg',
    },
    {
      id: 4,
      title: 'Marketplace',
      url: 'https://tokegameart.net/wp-content/uploads/2017/07/01.png',
    },
    {
      id: 5,
      title: 'Breeding',
      url: 'https://tokegameart.net/wp-content/uploads/2017/07/01.png',
    },
    {
      id: 6,
      title: 'Upgrade',
      url: 'https://tokegameart.net/wp-content/uploads/2017/07/01.png',
    },
  ];

  if (!users) {
    return {
      notFound: true,
    };
  }
  return users;
}
