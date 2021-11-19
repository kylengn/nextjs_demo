import React from 'react';
import styles from '../styles/GamePlay.module.css';

function GamePlay({ data }) {
  // const users = props.users;

  // console.log('debug1');
  // console.log(users);
  return (
    <div
      className='bg-no-repeat bg-center bg-cover absolute gameplay'
      style={{
        backgroundImage: `url('https://cdn.wallpapersafari.com/11/43/EXVgK1.png')`,
        left: '0%',
        right: '0%',
        bottom: '0%',
        top: '90vh',
        height: '200vh',
        zIndex: '-1',
      }}
    >
      <h1 className='uppercase text-center text-2xl lg:text-4xl xl:text-5xl my-8 font-bold'>
        Game Play
      </h1>
      <div className='grid grid-cols-3 gap-2 lg:gap-6 lg:mx-64 md:mx-12 mx-8'>
        {!data ? (
          <h1>Loading...</h1>
        ) : (
          data.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              style={{ backgroundImage: `url(/assets/${item.imageName})` }}
            >
              <h2>{item.title}</h2>
            </div>
          ))
        )}
      </div>

      {/* DINO TOKEN */}
      <h1 className='uppercase text-center text-2xl lg:text-4xl xl:text-5xl my-8 font-bold'>
        Dino Token
      </h1>
    </div>
  );
}

export default GamePlay;
