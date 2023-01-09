import { motion } from 'framer-motion';
import FoodySVG from '../assets/SVGS/Projects/FoodySVG';
import { BsGithub } from 'react-icons/bs';
import Image from 'next/image';
import dadmi from '../assets/Images/dadmi.png';
import jbcfitness from '../assets/Images/jbcfitness.png';
import ulsc from '../assets/Images/ulsc.png';
import FoodyadminSVG from '../assets/SVGS/Projects/FoodyadminSVG';
import DahilayanadminSVG from '../assets/SVGS/Projects/Dahilayanadmin';
import { BiLinkExternal } from 'react-icons/bi';
import Link from 'next/link';

const RecentWorks = () => {
  return (
    <div id='projects' className='mt-[174px]'>
      <div className='text-4xl md:text-5xl text-center flex flex-col gap-4 mb-8 font-semibold'>
        <p className='dark-text'>
          My recent <span className='text-[#68DCC7]'>works</span>
        </p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 '>
        <motion.div
          className='relative md:w-fit'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.7 }}>
          <div className='flex justify-center'>
            <FoodySVG className='md:w-[300px]' />
          </div>
          <div className='flex justify-center gap-4 mt-4'>
            <Link href='https://github.com/Franzcasttr/FoodyClient.git'>
              <BsGithub className='text-3xl text-[#ffffff]' />
            </Link>

            <Link href='https://foody-17af1.web.app/'>
              <BiLinkExternal className='text-3xl text-[#ffffff]' />
            </Link>
          </div>

          <div className='mt-4'>
            <p className='text-2xl font-semibold text-center'>Foody</p>
          </div>
        </motion.div>

        <motion.div
          className='relative md:w-fit'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.7 }}>
          <div className='flex justify-center'>
            <FoodyadminSVG className='md:w-[300px]' />
          </div>

          <div className='flex justify-center gap-4 mt-4'>
            <Link href='https://github.com/Franzcasttr/Foody-Admin.git'>
              <BsGithub className='text-3xl text-[#ffffff]' />
            </Link>

            <Link href='https://foodyadmin-11c83.web.app/'>
              <BiLinkExternal className='text-3xl text-[#ffffff]' />
            </Link>
          </div>

          <div className='mt-4'>
            <div className='text-center text-sm mb-4'>
              <p>Test account:</p>
              <p>username: testuser93485@gmail.com</p>
              <p>password: secretpassword</p>
            </div>
            <p className='text-2xl font-semibold text-center'>
              Foody admin page
            </p>
          </div>
        </motion.div>

        <motion.div
          className=' md:w-fit'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.7 }}>
          <div className='md:mt-8 flex justify-center'>
            <Image
              src={dadmi}
              alt='Foody admin page'
              className='md:w-[300px]'
              priority
            />
          </div>

          <div className='flex justify-center gap-4 mt-4'>
            <Link href='https://github.com/Franzcasttr/dahilayan-client-public'>
              <BsGithub className='text-3xl text-[#ffffff]' />
            </Link>

            <Link href='https://dahilayan-client-side.vercel.app/'>
              <BiLinkExternal className='text-3xl text-[#ffffff]' />
            </Link>
          </div>
          <div className='mt-4'>
            <p className='text-2xl font-semibold text-center'>Dahilayan</p>
          </div>
        </motion.div>

        <motion.div
          className='relative md:w-fit'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.7 }}>
          <div className='flex justify-center'>
            <DahilayanadminSVG className='md:w-[300px]' />
          </div>

          <div className='flex justify-center gap-4 mt-4'>
            <Link href='https://github.com/Franzcasttr/dahilayan-admin-public'>
              <BsGithub className='text-3xl text-[#ffffff]' />
            </Link>

            <Link href='https://hotel-admin-alpha.vercel.app/auth/signin'>
              <BiLinkExternal className='text-3xl text-[#ffffff]' />
            </Link>
          </div>
          {/* technologies */}

          <div className='mt-4'>
            <div className='text-center text-sm mb-4'>
              <p>Test account:</p>
              <p>username: testuser93485@gmail.com</p>
              <p>password: secretpassword</p>
            </div>
            <p className='text-2xl font-semibold text-center'>
              Dahilayan admin page
            </p>
          </div>
        </motion.div>

        <motion.div
          className=' md:w-fit'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.7 }}>
          <div className='md:mt-8 flex justify-center'>
            <Image
              src={jbcfitness}
              alt='JBC Fitness'
              className='md:w-[300px]'
              priority
            />
          </div>
          <div className='flex justify-center gap-4 mt-4'>
            <Link href='https://github.com/Franzcasttr/jbcfitness.git'>
              <BsGithub className='text-3xl text-[#ffffff]' />
            </Link>

            <Link href='https://jbcfitness.vercel.app/'>
              <BiLinkExternal className='text-3xl text-[#ffffff]' />
            </Link>
          </div>
          {/* technologies */}

          <div className='mt-4'>
            <p className='text-2xl font-semibold text-center'>
              JBC Fitness Gym
            </p>
          </div>
        </motion.div>

        <motion.div
          className=' md:w-fit'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.7 }}>
          <div className='md:mt-8 flex justify-center'>
            <Image
              src={ulsc}
              alt='JBC Fitness'
              className='md:w-[300px]'
              priority
            />
          </div>
          <div className='flex justify-center gap-4 mt-4'>
            <Link href='https://github.com/Franzcasttr/ulsc.git'>
              <BsGithub className='text-3xl text-[#ffffff]' />
            </Link>

            <Link href='https://ulsc-6b4c1.web.app/'>
              <BiLinkExternal className='text-3xl text-[#ffffff]' />
            </Link>
          </div>
          {/* technologies */}

          <div className='mt-4'>
            <p className='text-2xl font-semibold text-center'>ULSC</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RecentWorks;
