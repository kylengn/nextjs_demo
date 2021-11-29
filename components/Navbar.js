/* eslint-disable @next/next/link-passhref */
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/assets/logo.png';
import Menu from '../public/assets/menu.png';
import PlayBtn from '../public/assets/playbtn.png';
import MenuBar from '../public/assets/top-bar@3x.png';
import Header from '../styles/Header.module.css';

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    // Navigation bar here
    <>
      <nav className='flex items-center w-screen'>
        <div
          className={`mt-2 space-y-24 items-center hidden md:flex ${Header.navBar} transform lg:scale-75 md:scale-50 justify-around`}
        >
          <Link href='https://bscscan.com/token/0x04260673729c5f2b9894a467736f3d85f8d34fc8'>
            <a className=''>Contract Address</a>
          </Link>

          <Link href='https://whitepaper.cryptoplanes.me/'>
            <a className=''>Whitepaper</a>
          </Link>

          <div className=''>
            <Image src={Menu} alt='menu' onClick={handleToggle} />
          </div>
        </div>
      </nav>

      {/* nav here */}
      <div className='flex justify-end min-h-screen md:hidden'>
        <div className=''>
          <div></div>

          <div className='mobile-menu-button cursor-pointer mt-4 mr-2'>
            <Image src={Menu} alt='menu' onClick={handleToggle} />
          </div>
        </div>

        <div
          className={`bg-green-600 text-secondary-100 w-64 py-7 px-2 absolute inset-y-0 left-0 transform ${
            isActive ? '-translate-x-full' : null
          } transition duration-200 ease-in-out`}
          id='sidebar'
        >
          <div className='flex justify-center my-6'>
            <Image src={Logo} width={64} height={64} alt='logo' />
          </div>
          <nav>
            <Link href='https://bscscan.com/token/0x04260673729c5f2b9894a467736f3d85f8d34fc8'>
              <a className='block py-2.5 px-4 mx-8 my-8 btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 text-center'>
                Contract Address
              </a>
            </Link>

            <Link href='https://whitepaper.cryptoplanes.me/'>
              <a className='block py-2.5 px-4 mx-8 my-8 btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 text-center'>
                Whitepaper
              </a>
            </Link>

            <Link href='/play'>
              <div className='transform hover:scale-125 transition ease-in-out duration-500 ml-8'>
                <Image src={PlayBtn} alt='play' />
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
