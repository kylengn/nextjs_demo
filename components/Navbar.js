/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/logo.png';

const Navbar = () => {
  return (
    <nav className='mt-6 flex justify-around items-center'>
      <div className=''>
        <Image src={Logo} width={64} height={64} alt='logo' />
      </div>
      <Link href='https://bscscan.com/token/0x04260673729c5f2b9894a467736f3d85f8d34fc8'>
        <a className='btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300'>
          Contract Address
        </a>
      </Link>
      <Link href='https://whitepaper.cryptoplanes.me/'>
        <a className='btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50  transition ease-out duration-300'>
          Whitepaper
        </a>
      </Link>
      <Link href='/play'>
        <button className='btn text-primary border-primary border-2 hover:bg-primary hover:text-white transition ease-in-out duration-500 ml-2'>
          Play Now
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
