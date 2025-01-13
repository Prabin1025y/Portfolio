'use client';
import { Moon, SunDim } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import UseMounted from '../hooks/UseMounted';

const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme()
  const isMounted = UseMounted()
  const dark = theme ==="dark"

  useEffect(() => {
    setTheme(dark? 'dark':'light')
  }, [dark])

  if(!isMounted)
    return null;
  
  return (
    <div onClick={() => setTheme(dark ? 'light' : 'dark')} className='w-12 h-6 px-[2px] flex items-center justify-between relative border transition-all duration-300 border-[#0E1A21] dark:border-white rounded-full overflow-hidden'>
      <div className={`w-5 h-5 transition-all duration-500 bg-[#0E1A21] dark:bg-white rounded-full absolute text-black left-[2px] ${dark && "translate-x-[22px]"}`}>
      </div>
      <SunDim color='white' className={`${!dark && 'translate-y-5'}  transition-all duration-500 `} size={20} />
      <Moon color='#0E1A21' className={`${dark && 'translate-y-5'}  transition-all duration-500`} size={16} />
    </div>
  )
}

export default DarkModeSwitch