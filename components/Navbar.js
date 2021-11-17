/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/logo.png';

const Navbar = () => {
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
            <button className='btn p-2 text-primary border-primary border-2 hover:bg-primary hover:text-white transform hover:scale-125 transition ease-in-out duration-500 ml-2'>
              Play Now
            </button>
          </Link>
        </div>
      </nav>

      {/* nav here */}
      <div className='flex justify-end min-h-screen md:hidden'>
        {/* mobile menu */}
        <div className=''>
          <div></div>
          <button className='p-4 menu'>
            <svg
              className='w-8 h-8 text-secondary-200'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </button>
        </div>

        {/* sidebar */}
        <div className='bg-green-600 text-secondary-100 w-64 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out sidebar'>
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
              <button className='btn block p-2 w-32 mx-auto my-8 text-primary border-primary border-2 hover:bg-primary hover:text-white transform hover:scale-125 transition ease-in-out duration-500 text-center'>
                Play Now
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
