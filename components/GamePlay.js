import React from 'react';
import styles from '../styles/GamePlay.module.css';

function GamePlay({ users }) {
  // const users = props.users;

  // console.log('debug1');
  // console.log(users);
  return (
    <div
      className='bg-no-repeat bg-center bg-cover absolute'
      style={{
        backgroundImage: `url('https://cdn.wallpapersafari.com/11/43/EXVgK1.png')`,
        left: '0%',
        right: '0%',
        bottom: '0%',
        top: '90%',
        height: '1280px;',
        zIndex: '-1',
      }}
    >
      <h1 className='uppercase text-center text-5xl my-8'>Game Play</h1>
      <div className={styles.grid}>
        {!users ? (
          <h1>Loading...</h1>
        ) : (
          users.map((item) => (
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
    </div>
  );
}

export default GamePlay;
