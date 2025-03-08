'use client';
import { useTheme } from 'next-themes'
import React from 'react'
import UseMounted from '../hooks/UseMounted';

const AboutBg = () => {
  const { theme } = useTheme();
  const isMounted = UseMounted()


  if (!isMounted)
    return <div className='w-screen h-64'></div>;

  return (
    <div className={`bg-[url("/${theme == "dark" ? 'dark-wave.svg' : 'light-wave.svg'}")] w-screen h-20 sm:h-32 md:h-40 lg:h-48 xl:h-64 bg-cover`} />
    // <div className={`bg-[url("/dark-wave.svg")] w-screen h-64 bg-cover`} />
    // <Image width={100}/>
    // <div className={`bg-[url("/light-wave.svg")] w-screen h-full bg-cover absolute`}/>
  )
}

export default AboutBg