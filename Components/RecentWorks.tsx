import React from 'react';
import FoodySVG from '../assets/SVGS/Projects/FoodySVG';
import { HiGlobeAlt } from 'react-icons/hi';
import { BsGithub } from 'react-icons/bs';

const RecentWorks = () => {
  return (
    <div className='mt-[174px]'>
      <div className='text-4xl md:text-5xl text-center flex flex-col gap-4 mb-8 font-semibold'>
        <p className='dark-text'>
          My recent <span className='text-[#68DCC7]'>works</span>
        </p>
      </div>
      <div>
        <div className='relative'>
          <FoodySVG />
          <div className='absolute top-2 left-5'>
            <button className='p-2 bg-white rounded-full'>
              <BsGithub className='text-3xl text-[#FB3C97]' />
            </button>
          </div>

          <div className='absolute top-2 right-5'>
            <button className='p-1 bg-white rounded-full'>
              <HiGlobeAlt className='text-4xl text-[#46A6EC]' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
