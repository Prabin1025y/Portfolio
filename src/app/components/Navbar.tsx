import React from 'react'
import DarkModeSwitch from './DarkModeSwitch'
import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='bg-[#7FC7D9] z-20 dark:bg-[#214359] text-[#0F1035] dark:text-white transition duration-300 h-20 flex justify-between items-center px-4 sm:px-10'>
      <p className='font-[Inter] font-bold tracking-[4px] text-base sm:text-xl'>PRABIN.DEV</p>
      <ul className='flex gap-5 sm:gap-10 font-[Inter] tracking-widest text-sm items-center'>
        {/* <li className='cursor-pointer transition duration-300'>switch</li> */}
        <li><DarkModeSwitch /></li>
        <li className='hidden lg:block cursor-pointer font-semibold  transition hover:text-[#376c85] dark:hover:text-[var(--extra-blue)]'>HOME</li>
        <li className='hidden lg:block cursor-pointer font-semibold  transition hover:text-[#376c85] dark:hover:text-[var(--extra-blue)]'>PROJECTS</li>
        <li className='hidden lg:block cursor-pointer font-semibold  transition hover:text-[#376c85] dark:hover:text-[var(--extra-blue)]'>BLOG</li>
        <li className='hidden lg:block cursor-pointer font-semibold  transition hover:text-[#376c85] dark:hover:text-[var(--extra-blue)]'>ABOUT</li>
        <li className='hidden lg:block cursor-pointer font-semibold  transition hover:text-[#376c85] dark:hover:text-[var(--extra-blue)]'>CONTACT</li>
        <li className='lg:hidden'><Menu/></li>
      </ul>
    </nav>
  )
}

export default Navbar