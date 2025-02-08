'use client';
import { useTheme } from 'next-themes'
import React from 'react'

const AboutBg = () => {
    const {theme} = useTheme();
  return (
    <div className={`bg-[url("/${theme === "dark"? "square.svg" : 'light-wave.svg'}")] w-screen h-64 bg-cover`}/>
    // <div className={`bg-[url("/light-wave.svg")] w-screen h-full bg-cover absolute`}/>
  )
}

export default AboutBg