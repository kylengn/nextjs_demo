import React from 'react';
import styles from '../styles/GamePlay.module.css';

function GamePlay({ data }) {
  // const data = props.data;

  console.log('debug1');
  console.log(data);
  return (
    <div className={styles.gameplay}>
      <h1 className={styles.title}>Game Play</h1>
      <div className={styles.grid}>
        {/* {data.map((item) => {
          <div
            key={item.id}
            className={styles.card}
            style={{ backgroundImage: `url(${item.url})` }}
          >
            <h2>{item.title}</h2>
          </div>;
        })} */}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title: 'Training',
      url: 'https://cdn.wallpapersafari.com/11/43/EXVgK1.png',
    },
    {
      id: 2,
      title: 'PvC',
      url: 'https://i.pinimg.com/originals/a9/3b/7c/a93b7c15d450b37f95016519661ed0fd.jpg',
    },
    {
      id: 3,
      title: 'PvP',
      url: 'https://i.pinimg.com/originals/8b/d2/f8/8bd2f82e8c105b16270005d50f6b2f79.jpg',
    },
    {
      id: 4,
      title: 'Marketplace',
      url: 'https://tokegameart.net/wp-content/uploads/2017/08/Cute-Gecko-2D-Character-Sprite-for-Side-Scrolling-Game.jpg',
    },
    {
      id: 5,
      title: 'Upgrade',
      url: 'https://tokegameart.net/wp-content/uploads/2017/08/Cute-Turtle-2D-Character-Sprite-for-Side-Scrolling-Game.jpg',
    },
    {
      id: 6,
      title: 'Breeding',
      url: 'https://i.pinimg.com/originals/93/8f/77/938f774d188ad479af005218c5607ebb.jpg',
    },
  ];

  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // const data = await res.json();

  console.log('debug');
  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default GamePlay;
