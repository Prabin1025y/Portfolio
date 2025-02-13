'use client';
import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'
import UseMounted from '../hooks/UseMounted';
import Image from 'next/image';

const AboutBg = () => {
  const { theme } = useTheme();
  const isMounted = UseMounted()

  useEffect(() => {
    console.log(theme)
  }, [])

  if (!isMounted)
    return <div className='w-screen h-64'></div>;

  return (
    <div className={`bg-[url("/${theme == "dark" ? 'dark-wave.svg' : 'light-wave.svg'}")] w-screen h-64 bg-cover`} />
    // <div className={`bg-[url("/dark-wave.svg")] w-screen h-64 bg-cover`} />
    // <Image width={100}/>
    // <div className={`bg-[url("/light-wave.svg")] w-screen h-full bg-cover absolute`}/>
  )
}

export default AboutBg