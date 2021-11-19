import React from 'react';
import styles from '../styles/GamePlay.module.css';
import Image from 'next/image';
import tokenMap from '../public/assets/token-map.png';
import gamePlay from '../public/assets/1-03.png';

function GamePlay({ data }) {
  // const users = props.users;

  // console.log('debug1');
  // console.log(users);
  return (
    <div
      style={{
        position: 'absolute',
        backgroundImage: `url('https://www.desktopbackground.org/download/1920x1080/2011/06/20/221882_2d-game-backgrounds-resource-by-painterhoya-on-deviantart_4992x1280_h.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex: '-1',
        top: '90vh',
        height: '200vh',
      }}
    >
      <h1 className='uppercase text-center text-2xl lg:text-4xl xl:text-5xl my-8 font-bold'>
        Game Play
      </h1>
      <div className='grid grid-cols-3 gap-2 lg:gap-6 lg:mx-52 md:mx-12 mx-8'>
        {!data ? (
          <h1>Loading...</h1>
        ) : (
          data.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              style={{ backgroundImage: `url(${item.url})` }}
            >
              <h2>{item.title}</h2>
            </div>
          ))
        )}
      </div>

      {/* DINO TOKEN */}
      <div>
        <h1 className='uppercase text-center text-2xl lg:text-4xl xl:text-5xl my-8 font-bold'>
          Dino Token
        </h1>
        <div className='lg:mx-64'>
          <Image src={tokenMap} alt='token' />
        </div>
      </div>
    </div>
  );
}

export default GamePlay;

// width={768} height={128}
