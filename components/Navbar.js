/* eslint-disable @next/next/link-passhref */
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/assets/logo.png';
import Menu from '../public/assets/menu.png';
import PlayBtn from '../public/assets/playbtn.png';
import MenuBar from '../public/assets/top-bar@3x.png';

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    // Navigation bar here
    <>
      <nav>
        <div className='mt-6 justify-around items-center hidden md:flex'>
          <Image src={Logo} width={64} height={64} alt='logo' />

          <Link href='https://bscscan.com/token/0x04260673729c5f2b9894a467736f3d85f8d34fc8'>
            <a className='btn p-2 bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300'>
              Contract Address
            </a>
          </Link>

          <Link href='https://whitepaper.cryptoplanes.me/'>
            <a className='btn p-2 bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300'>
              Whitepaper
            </a>
          </Link>

          <Link href='/play'>
            <div className='transform hover:scale-125 transition ease-in-out duration-500 ml-2'>
              <Image src={PlayBtn} alt='play' />
            </div>
          </Link>
        </div>
      </nav>

      {/* nav here */}
      <div className='flex justify-end min-h-screen md:hidden'>
        <div className=''>
          <div></div>
<<<<<<< HEAD
          <button className='p-4' id='menu'>
            <svg
              className='w-8 h-8 text-secondary-200'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </button>
=======
          <div className='mobile-menu-button cursor-pointer mt-4 mr-2'>
            <Image src={Menu} alt='menu' onClick={handleToggle} />
          </div>
>>>>>>> khoi
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
