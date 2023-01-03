import Link from 'next/link';
import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { NavbarLinks } from '../assets/Links/NavbarLinks';

import LogoSVG from '../assets/SVGS/LogoSVG';

const Navbar = () => {
  return (
    <div className='section-center primary-clr hidden md:block'>
      <div className='flex justify-between p-4'>
        <div>
          <p className='text-[#68DCC7] font-bold text-xl'>
            <LogoSVG />
          </p>
        </div>
        <div className='flex gap-8'>
          {NavbarLinks.map((links) => {
            const { id, name, link } = links;

            return (
              <div key={id}>
                <Link href={link} className='hover:text-[#68DCC7]'>
                  {name}
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <button className='primary-clr p-3 bg-[#454B54] rounded-full'>
            <div className='flex gap-2 items-center'>
              <p>Download CV</p>
              <BiDownload className='text-xl' />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
