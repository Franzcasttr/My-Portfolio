import React from 'react';
import ExpressSVG from '../assets/SVGS/Skills/ExpressSVG';
import JSSVG from '../assets/SVGS/Skills/JSSVG';
import MONGOSVG from '../assets/SVGS/Skills/MONGOSVG';
import NEXTSVG from '../assets/SVGS/Skills/NEXTSVG';
import NODESVG from '../assets/SVGS/Skills/NODESVG';
import PRISMASVG from '../assets/SVGS/Skills/PRISMASVG';
import PSQLSVG from '../assets/SVGS/Skills/PSQLSVG';
import REACTSVG from '../assets/SVGS/Skills/REACTSVG';
import TSSVG from '../assets/SVGS/Skills/TSSVG';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <div className='mt-[174px]'>
      <div className='text-5xl text-center flex flex-col gap-4 mb-8 font-semibold'>
        <p className='dark-text'>
          My <span className='text-[#68DCC7]'>skills</span>
        </p>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <motion.div
          className='flex items-center flex-col gap-4 md:mb-8'
          initial={{ opacity: 0, y: -200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, type: 'spring' },
          }}
          viewport={{ once: true, amount: 1 }}>
          <JSSVG className='w-[100px] md:w-[260px] md:h-[140px]' />
          <p>JavaScript</p>
        </motion.div>
        <motion.div
          className='flex items-center flex-col gap-4 md:mb-8'
          initial={{ opacity: 0, y: -200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5, type: 'spring' },
          }}
          viewport={{ once: true, amount: 1 }}>
          <TSSVG className='w-[100px] md:w-[260px] md:h-[140px]' />
          <p>TypeScript</p>
        </motion.div>
        <motion.div
          className='flex items-center flex-col gap-4 md:mb-8'
          initial={{ opacity: 0, y: -200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.7, type: 'spring' },
          }}
          viewport={{ once: true, amount: 0.6 }}>
          <NEXTSVG className='w-[100px] md:w-[260px] md:h-[140px]' />
          <p>NextJS</p>
        </motion.div>
        <motion.div
          className='flex items-center flex-col gap-4 md:mb-8'
          initial={{ opacity: 0, y: -200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.9, type: 'spring' },
          }}
          viewport={{ once: true, amount: 1 }}>
          <REACTSVG className='w-[100px] md:w-[260px] md:h-[140px]' />
          <p>ReactJS</p>
        </motion.div>
        <motion.div
          className='flex items-center flex-col gap-4 md:mb-8'
          initial={{ opacity: 0, y: -200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1, type: 'spring' },
          }}
          viewport={{ once: true, amount: 1 }}>
          <NODESVG className='w-[100px] md:w-[260px] md:h-[140px]' />
          <p>Node JS</p>
        </motion.div>
        <motion.div
          className='flex items-center flex-col gap-4 md:mb-8'
          initial={{ opacity: 0, y: -200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1.2, type: 'spring' },
          }}
          viewport={{ once: true, amount: 1 }}>
          <ExpressSVG className='w-[100px] md:w-[260px] md:h-[140px]' />
          <p>Express JS</p>
        </motion.div>
        <motion.div
          className='flex items-center flex-col gap-4 md:mb-8'
          initial={{ opacity: 0, y: -200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1.3, type: 'spring' },
          }}
          viewport={{ once: true, amount: 1 }}>
          <PSQLSVG className='w-[100px] md:w-[260px] md:h-[140px]' />
          <p>PostgreSQL</p>
        </motion.div>
        <motion.div
          className='flex items-center flex-col gap-4 md:mb-8'
          initial={{ opacity: 0, y: -200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1.4, type: 'spring' },
          }}
          viewport={{ once: true, amount: 1 }}>
          <MONGOSVG className='w-[100px] md:w-[260px] md:h-[140px]' />
          <p>MongoDB</p>
        </motion.div>
        <motion.div
          className='flex items-center flex-col gap-4 md:mb-8'
          initial={{ opacity: 0, y: -200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1.5, type: 'spring' },
          }}
          viewport={{ once: true, amount: 1 }}>
          <PRISMASVG className='w-[100px] md:w-[260px] md:h-[140px]' />
          <p>Prisma ORM</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
