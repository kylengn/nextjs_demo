import React from 'react';
import styles from '../styles/Team.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Advisor from '../public/assets/advisor.jpg';
import CMC from '../public/assets/CMC.png';
import CGecko from '../public/assets/CGecko.png';
import Binance from '../public/assets/binance.png';

const Team = ({ staffs }) => {
  return (
    <div
      style={{
        position: 'absolute',
        backgroundImage: `url('https://i.pinimg.com/originals/48/09/2a/48092a026928bd10576536b9326c0c2d.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        left: '0',
        right: '0',
        bottom: '0',
        top: '490vh',
        height: '150vh',
        zIndex: '-1',
      }}
    >
      <h1 className='uppercase text-center text-2xl lg:text-4xl xl:text-5xl my-8 font-bold'>
        Meet Our Team
      </h1>

      <div className='grid grid-cols-3 mx-8 md:mx-12 xl:mx-96 gap-2 lg:gap-4'>
        {!staffs ? (
          <h1>Loading...</h1>
        ) : (
          staffs.map((staff) => (
            <div key={staff.id}>
              <div
                className={styles.card}
                style={{ backgroundImage: `url(${staff.url})` }}
              ></div>
              <h1 className={styles.name}>{staff.name}</h1>
              <h2 className={styles.title}>{staff.title}</h2>
            </div>
          ))
        )}
      </div>

      {/* Advisors & Backers */}
      <h1 className='uppercase text-center text-2xl lg:text-4xl xl:text-5xl my-8 font-bold'>
        Advisor
      </h1>
      <div className='lg:mx-96 mx-32'>
        <a
          href='https://vnsmartchain.com/'
          className='hover:shadow-inner transform hover:scale-110 hover:bg-opacity-50 transition ease-out duration-300'
        >
          <Image
            src={Advisor}
            alt='advisor'
            className='rounded-xl'
            width={256}
            height={64}
          />
        </a>
      </div>
      <h1 className='uppercase text-center text-2xl lg:text-4xl xl:text-5xl my-8 font-bold'>
        Backers
      </h1>
      <div className='lg:mx-96 mx-32 grid grid-cols-1 md:grid-cols-3'>
        <a
          href='https://coinmarketcap.com/'
          className='mx-3 hover:shadow-inner transform hover:scale-110 hover:bg-opacity-50 transition ease-out duration-300'
        >
          <Image
            src={CMC}
            alt='cmc'
            className='rounded-xl'
            width={256}
            height={64}
          />
        </a>
        <a
          href='https://www.binance.com/en/markets'
          className='mx-3 hover:shadow-inner transform hover:scale-110 hover:bg-opacity-50 transition ease-out duration-300'
        >
          <Image
            src={CGecko}
            alt='gecko'
            className='rounded-xl'
            width={256}
            height={64}
          />
        </a>
        <a
          href='https://www.coingecko.com/en'
          className='mx-3 hover:shadow-inner transform hover:scale-110 hover:bg-opacity-50 transition ease-out duration-300'
        >
          <Image
            src={Binance}
            alt='binance'
            className='rounded-xl'
            width={256}
            height={64}
          />
        </a>
      </div>
    </div>
  );
};

export default Team;
