import React from 'react';
import JSSVG from '../assets/SVGS/Skills/JSSVG';
import MONGOSVG from '../assets/SVGS/Skills/MONGOSVG';
import NEXTSVG from '../assets/SVGS/Skills/NEXTSVG';
import NODESVG from '../assets/SVGS/Skills/NODESVG';
import PRISMASVG from '../assets/SVGS/Skills/PRISMASVG';
import PSQLSVG from '../assets/SVGS/Skills/PSQLSVG';
import REACTSVG from '../assets/SVGS/Skills/REACTSVG';
import TSSVG from '../assets/SVGS/Skills/TSSVG';

const Skills = () => {
  return (
    <div className='mt-[174px]'>
      <div className='text-5xl text-center flex flex-col gap-4 mb-8 font-semibold'>
        <p className='dark-text'>
          My <span className='text-[#68DCC7]'>skills</span>
        </p>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='flex items-center flex-col gap-4 md:mb-8'>
          <JSSVG className='w-[100px] md:w-[260px] md:h-[140px]' />
          <p>JavaScript</p>
        </div>
        <div className='flex items-center flex-col gap-4 md:mb-8'>
          <TSSVG className='w-[100px] md:w-[260px] md:h-[140px]' />
          <p>TypeScript</p>
        </div>
        <div className='flex items-center flex-col gap-4 md:mb-8'>
          <NEXTSVG className='w-[100px] md:w-[260px] md:h-[140px]' />
          <p>NextJS</p>
        </div>
        <div className='flex items-center flex-col gap-4 md:mb-8'>
          <REACTSVG className='w-[100px] md:w-[260px] md:h-[140px]' />
          <p>ReactJS</p>
        </div>
        <div className='flex items-center flex-col gap-4 md:mb-8'>
          <NODESVG className='w-[100px] md:w-[260px] md:h-[140px]' />
          <p>Node JS</p>
        </div>
        <div className='flex items-center flex-col gap-4 md:mb-8'>
          <PSQLSVG className='w-[100px] md:w-[260px] md:h-[140px]' />
          <p>PostgreSQL</p>
        </div>
        <div className='flex items-center flex-col gap-4 md:mb-8'>
          <MONGOSVG className='w-[100px] md:w-[260px] md:h-[140px]' />
          <p>MongoDB</p>
        </div>
        <div className='flex items-center flex-col gap-4 md:mb-8'>
          <PRISMASVG className='w-[100px] md:w-[260px] md:h-[140px]' />
          <p>Prisma ORM</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
