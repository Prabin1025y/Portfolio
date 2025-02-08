import React from 'react'
import { FaGithub } from "react-icons/fa";

const GithubButton = () => {
  return (
    <button className='bg-[#A0D4FF] shadow-[4px_4px_10px_-5px_rgba(0,_0,_0,_0.7)] aspect-square w-10 rounded-md text-[#153448] grid place-items-center hover:scale-105 transition duration-300'>
      <FaGithub size={25} />
    </button>
  )
}

export default GithubButton