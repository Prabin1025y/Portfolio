'use client';
import React, { useEffect, useState } from 'react'
import DarkModeSwitch from './DarkModeSwitch'
import Link from 'next/link';
import NavSecondary from './NavSecondary';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className={`z-20 ${isScrolled ? "bg-[#7FC7D9]/80 dark:bg-[#214359]/80 backdrop-blur-md " : "bg-[#7FC7D9] dark:bg-[#214359]"} text-[#0F1035] dark:text-white transition duration-300 h-14 lg:h-20 flex sticky top-0 justify-between items-center px-4 sm:px-10`}>
        <p className='font-[Inter] font-bold tracking-[4px] text-base sm:text-xl'>PRABIN.DEV</p>
        <ul className='flex gap-5 sm:gap-10 font-[Inter] tracking-widest text-sm items-center'>
          {/* <li className='cursor-pointer transition duration-300'>switch</li> */}
          <li><DarkModeSwitch /></li>
          <Link href="/#Home" className='hidden lg:block cursor-pointer font-semibold  transition hover:text-[#376c85] dark:hover:text-[var(--extra-blue)]'>HOME</Link>
          <Link href="/#Projects" className='hidden lg:block cursor-pointer font-semibold  transition hover:text-[#376c85] dark:hover:text-[var(--extra-blue)]'>PROJECTS</Link>
          <Link href="/blog" className='hidden lg:block cursor-pointer font-semibold  transition hover:text-[#376c85] dark:hover:text-[var(--extra-blue)]'>BLOG</Link>
          <Link href="/#AboutMe" className='hidden lg:block cursor-pointer font-semibold  transition hover:text-[#376c85] dark:hover:text-[var(--extra-blue)]'>ABOUT</Link>
          <Link href="/#Contact" className='hidden lg:block cursor-pointer font-semibold  transition hover:text-[#376c85] dark:hover:text-[var(--extra-blue)]'>CONTACT</Link>
          {/* <button onClick={()=>setsideBarOpen(true)} className='lg:hidden'><Menu /></button> */}
        </ul>
      </nav>
      {/* {sideBarOpen && <SideBar setSidebarOpen={setsideBarOpen} />} */}
      <NavSecondary />
    </>
  )
}

export default Navbar