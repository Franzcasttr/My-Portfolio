import React from 'react';
import AboutmeSVG from '../assets/SVGS/AboutmeSVG';
import { motion } from 'framer-motion';

const pathVariants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: 'spring',
    },
  },
};

const About = () => {
  return (
    <div id='about' className='mt-[174px]'>
      <div className='block justify-between items-center gap-10 mt-16 lg:flex lg:flex-row-reverse'>
        <div>
          <div className='text-5xl text-center flex flex-col gap-4 mb-4 font-semibold md:text-left'>
            <p className='dark-text'>
              About <span className='text-[#68DCC7]'>me</span>
            </p>
          </div>
          <p className='text-justify mt-8'>
            I&apos;m a self-taught full-stack web developer from the
            Philippines. I&apos;ve been building web applications over a year,
            and helping business owners to create their stunning websites.
          </p>
          <p className='text-justify mt-8'>
            I utilize my creativity and knowledge into my passion by creating a
            product that can give satisfaction and admiration to my clients.
          </p>
        </div>
        <motion.div
          className='flex justify-center '
          variants={pathVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.6 }}>
          <AboutmeSVG className='w-[420px] h-[482px] md:w-[600px] md:h-[509px]' />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
