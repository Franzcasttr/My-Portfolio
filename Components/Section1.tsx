import React from 'react';
import { BiDownload } from 'react-icons/bi';
import CTASVG from '../assets/SVGS/CTA';
import { motion } from 'framer-motion';

const Section1 = () => {
  return (
    <div className='block justify-between gap-10 mt-16 md:mt-0 lg:flex'>
      <div>
        <motion.h1
          className='text-[6rem] md:text-[8rem] xl:text-[10rem] text-center md:text-left  font-extrabold text-[#454B54]'
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}>
          HELLO
        </motion.h1>
        <div className='text-5xl xl:text-6xl text-center flex flex-col gap-4 mb-4 font-semibold md:text-left'>
          <motion.p
            initial={{ opacity: 0, x: 200 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.7, duration: 1 },
            }}>
            I&apos;m
          </motion.p>
          <motion.p
            className='text-[#68DCC7]'
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.9, duration: 1 },
            }}>
            Francis
          </motion.p>
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
      <div className='flex justify-center mt-11 '>
        <CTASVG className='w-[315px] h-[256px] md:w-[405px] md:h-[309px] xl:w-[505px] xl:h-[409px]' />
      </div>
    </div>
  );
};

export default Section1;
