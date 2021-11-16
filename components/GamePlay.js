import React from 'react';
import styles from '../styles/GamePlay.module.css';

function GamePlay({ users }) {
  // const users = props.users;

  // console.log('debug1');
  // console.log(users);
  return (
    <div className={styles.gameplay}>
      <h1 className={styles.title}>Game Play</h1>
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
