import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <div className='flex items-center space-x-4 text-white'>
          <Link className='text-4xl' href='https://facebook.com'>
            <BsFacebook />
          </Link>
          <Link className='text-5xl' href='https://facebook.com'>
            <AiFillTwitterCircle />
          </Link>
          <Link className='text-4xl' href='https://facebook.com'>
            <BsLinkedin />
          </Link>
        </div>
      </div>
      <div className='my-8 text-center'>
        <p>Made by Francis Castro 2023</p>
      </div>
    </div>
  );
};

export default Footer;
