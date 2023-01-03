import React from 'react';
import { BiDownload } from 'react-icons/bi';
import CTASVG from '../assets/SVGS/CTA';

const Section1 = () => {
  return (
    <div className='block justify-between gap-10 mt-16 md:flex'>
      <div>
        <h1 className='text-[6rem] text-center md:text-left md:text-[10rem] font-extrabold text-[#454B54]'>
          HELLO
        </h1>
        <div className='text-6xl text-center flex flex-col gap-4 mb-4 font-semibold md:text-left'>
          <p>I&apos;m</p>
          <p className='text-[#68DCC7]'>Francis</p>
        </div>
        <p className='text-center md:text-left primary-clr'>
          looking for a web developer to fix or build your website? worry no
          more I am here to help you, just click the button below to know more
          about me.
        </p>
        <div className='flex justify-center md:justify-start'>
          <button className='primary-clr mt-8 p-4 bg-[#454B54] rounded-full'>
            <div className='flex gap-2 items-center'>
              <p>Download CV</p>
              <BiDownload className='text-xl' />
            </div>
          </button>
        </div>
      </div>
      <div className='flex justify-center mt-11 md:mt-0'>
        <CTASVG className='w-[315px] h-[256px] md:w-[505px] md:h-[409px]' />
      </div>
    </div>
  );
};

export default Section1;
