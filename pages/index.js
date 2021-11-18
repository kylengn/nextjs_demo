import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import GamePlay from '../components/GamePlay';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Script from 'next/script';
import Nft from '../components/Nft';

export default function Home({ data, nft }) {
  return (
    <>
      <Head>
        <title>MetaDino | ApolloChain.io</title>
        <meta name='keywords' content='metadino' />
      </Head>
      <Layout>
        <Header />
        <GamePlay data={data} />
        <Nft nft={nft} />
        <Script>
          {`const sideMenu = document.querySelector('#menu');
            const sideBar = document.querySelector('#sidebar');

            menu.addEventListener('click', () => {
              sideBar.classList.toggle('-translate-x-full');
            });
          `}
        </Script>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // console.log(context);
  const data = await getData();
  const nft = await getNft();
  return {
    props: {
      data,
      nft,
    },
  };
}

async function getData() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // const users = await res.json();

  const data = [
    {
      id: 1,
      title: 'Training',
      url: 'https://canary.contestimg.wish.com/api/webimage/5e7eef85c35d4d3dc066b8a4-large.jpg?cache_buster=67d85324ce6ed70199f9d0226ab3df04',
    },
    {
      id: 2,
      title: 'PvC',
      url: 'https://canary.contestimg.wish.com/api/webimage/5e7eef85c35d4d3dc066b8a4-large.jpg?cache_buster=67d85324ce6ed70199f9d0226ab3df04',
    },
    {
      id: 3,
      title: 'PvP',
      url: 'https://canary.contestimg.wish.com/api/webimage/5e7eef85c35d4d3dc066b8a4-large.jpg?cache_buster=67d85324ce6ed70199f9d0226ab3df04',
    },
    {
      id: 4,
      title: 'Marketplace',
      url: 'https://canary.contestimg.wish.com/api/webimage/5e7eef85c35d4d3dc066b8a4-large.jpg?cache_buster=67d85324ce6ed70199f9d0226ab3df04',
    },
    {
      id: 5,
      title: 'Breeding',
      url: 'https://canary.contestimg.wish.com/api/webimage/5e7eef85c35d4d3dc066b8a4-large.jpg?cache_buster=67d85324ce6ed70199f9d0226ab3df04',
    },
    {
      id: 6,
      title: 'Upgrade',
      url: 'https://canary.contestimg.wish.com/api/webimage/5e7eef85c35d4d3dc066b8a4-large.jpg?cache_buster=67d85324ce6ed70199f9d0226ab3df04',
    },
  ];

  if (!data) {
    return {
      notFound: true,
    };
  }
  return data;
}

async function getNft() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // const users = await res.json();

  const nft = [
    {
      id: 1,
      name: 'Draco',
      url: 'https://wallpaperaccess.com/full/3856041.jpg',
    },
    {
      id: 2,
      name: 'T-Rex',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnO-7PutJnj2o6ZkGUOQznc7nYMPVWtY1n5Q&usqp=CAU',
    },
    {
      id: 3,
      name: 'Spino',
      url: 'https://cdn.dribbble.com/users/1044993/screenshots/9009749/media/6e55d3fd4372ad500ba54c495ea40d73.png?compress=1&resize=400x300',
    },
    {
      id: 4,
      name: 'Mega',
      url: 'https://cdn.dribbble.com/users/1044993/screenshots/6274819/brontosaurus_dribbble.png?compress=1&resize=400x300',
    },
    {
      id: 5,
      name: 'Archae',
      url: 'https://assets.dragoart.com/images/4264_501/how-to-draw-a-cute-dinosaur_5e4c8137d81996.59879101_19287_3_3.jpg',
    },
    {
      id: 6,
      name: 'Allo',
      url: 'https://is5-ssl.mzstatic.com/image/thumb/Purple49/v4/f8/d7/b1/f8d7b1cd-f849-5817-06ed-041623e80526/source/512x512bb.jpg',
    },
  ];

  if (!nft) {
    return {
      notFound: true,
    };
  }
  return nft;
}
