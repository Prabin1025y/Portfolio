import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[var(--navbar)] h-20 flex justify-between items-center px-10'>
        <p className='font-[Inter] font-bold tracking-[4px] text-xl'>PRABIN.DEV</p>
        <ul className='flex gap-10 font-[Inter] tracking-widest text-sm'>
            <li className='cursor-pointer transition duration-300'>switch</li>
            <li className='cursor-pointer transition duration-300 hover:text-[var(--extra-blue)]'>HOME</li>
            <li className='cursor-pointer transition duration-300 hover:text-[var(--extra-blue)]'>PROJECTS</li>
            <li className='cursor-pointer transition duration-300 hover:text-[var(--extra-blue)]'>BLOG</li>
            <li className='cursor-pointer transition duration-300 hover:text-[var(--extra-blue)]'>ABOUT</li>
            <li className='cursor-pointer transition duration-300 hover:text-[var(--extra-blue)]'>CONTACT</li>
        </ul>
    </nav>
  )
}

export default Navbar