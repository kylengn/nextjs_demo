/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/logo.png';

const Navbar = () => {
  return (
    <nav className='nav-desktop'>
      <div className='mx-auto'>
        <Image src={Logo} width={128} height={128} alt='logo' />
      </div>
      <Link href='https://bscscan.com/token/0x04260673729c5f2b9894a467736f3d85f8d34fc8'>
        <a>Contract Address</a>
      </Link>
      <Link href='https://whitepaper.cryptoplanes.me/'>
        <a>Whitepaper</a>
      </Link>
      <Link href='/play'>
        <button className='shadow-2xl'>Play Now</button>
      </Link>
    </nav>
  );
};

export default Navbar;
