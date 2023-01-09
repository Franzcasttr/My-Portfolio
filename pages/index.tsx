import Head from 'next/head';
import LogoSVG from '../assets/SVGS/LogoSVG';
import Menu from '../assets/SVGS/Humberger';
import Navbar from '../Components/Navbar';
import Section1 from '../Components/Section1';
import About from '../Components/About';
import Skills from '../Components/Skills';
import RecentWorks from '../Components/RecentWorks';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import { useState } from 'react';
import { TbSmartHome } from 'react-icons/tb';
import { FaUserTie } from 'react-icons/fa';
import { FiLayers } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { AiOutlineMessage } from 'react-icons/ai';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export const sidebarVariant = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const SidebarLinks = [
  {
    id: 1,
    name: 'Home',
    link: '/',
    icon: <TbSmartHome />,
    textSize: 'text-2xl',
  },
  {
    id: 2,
    name: 'About',
    link: '#about',
    icon: <FaUserTie />,
    textSize: 'text-xl',
  },
  {
    id: 3,
    name: 'Projects',
    link: '#projects',
    icon: <FiLayers />,
    textSize: 'text-xl',
  },
  {
    id: 4,
    name: 'Contact',
    link: '#contact',
    icon: <AiOutlineMessage />,
    textSize: 'text-xl',
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Francis</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='section-center'>
          <div className='md:hidden flex justify-between items-center pt-8'>
            <LogoSVG />
            <div>
              <button onClick={() => setIsOpen(true)}>
                <Menu />
              </button>
              <AnimatePresence>
                {isOpen ? (
                  <motion.div
                    variants={sidebarVariant}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    className='p-4 bg-[#333941] fixed top-0 right-0 h-full w-44 z-40'>
                    <div className='flex justify-end mb-12'>
                      <button onClick={() => setIsOpen(false)}>
                        <MdClose className='text-[#D4EBFF] text-4xl' />
                      </button>
                    </div>
                    <div
                      className='flex flex-col text-[#D4EBFF] gap-8'
                      onClick={() => setIsOpen(false)}>
                      {SidebarLinks.map((links) => {
                        const { id, name, link, icon, textSize } = links;
                        return (
                          <Link
                            href={link}
                            className='hover:text-[#68DCC7]'
                            key={id}>
                            <div className='flex space-x-2 items-center'>
                              <div className={`${textSize}`}>{icon}</div>
                              <p>{name}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
          <Navbar />
          <Section1 />
          <About />
          <Skills />
          <RecentWorks />
          <Contact />

          <hr className='border border-[#454B54] mt-[104px] mb-12' />
          <Footer />
        </div>
      </main>
    </>
  );
}
