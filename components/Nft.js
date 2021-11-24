import React from 'react';
import styles from '../styles/Nft.module.css';

const Nft = ({ nft }) => {
  return (
    <div
      style={{
        position: 'absolute',
        backgroundImage: `url('https://wallpaperboat.com/wp-content/uploads/2019/08/Firewatch-Wallpaper-Wallpaper-From-The-Game-Purple.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        left: '0',
        right: '0',
        bottom: '0',
        top: '290vh',
        height: '200vh',
        zIndex: '-1',
      }}
    >
      <h1 className='uppercase text-secondary-100 text-center text-2xl lg:text-4xl xl:text-5xl my-8 font-bold'>
        Dino NFT
      </h1>
      <div className='grid grid-cols-3 mx-8 md:mx-12 xl:mx-96 gap-2 lg:gap-4'>
        {!nft ? (
          <h1>Loading...</h1>
        ) : (
          nft.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              style={{ backgroundImage: `url(${item.url})` }}
            >
              <h2>{item.name}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Nft;
